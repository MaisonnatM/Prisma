import styled, { CSSObject } from '@emotion/styled'
import { rgba } from 'emotion-rgba'

import { TTheme } from '../../../providers'
import {
  mergeResponsiveStyles,
  TBorderRadiusTokenEnum,
  TBorderSizeTokenEnum,
  TBreakpointTokenEnum,
  TColorTokenEnum,
  TElevationTokenEnum,
  TGapTokenEnum,
  TSpacingTokenEnum,
} from '../../../utils'

type TSpacing =
  | {
      horizontal?: TSpacingTokenEnum
      vertical?: TSpacingTokenEnum
      right?: TSpacingTokenEnum
      left?: TSpacingTokenEnum
      top?: TSpacingTokenEnum
      bottom?: TSpacingTokenEnum
    }
  | TSpacingTokenEnum

type TProps = {
  direction: 'column' | 'row' | 'column-reverse' | 'row-reverse'
  justify: 'initial' | 'end' | 'start' | 'center' | 'between'
  align: 'initial' | 'end' | 'start' | 'center'
  overflow: 'initial' | 'auto' | 'hidden'
  position: 'initial' | 'relative'
  $wrap: boolean
  gap: TGapTokenEnum
  elevation: TElevationTokenEnum
  background: TColorTokenEnum | { opacity: number; color: TColorTokenEnum }
  margin: TSpacing
  padding: TSpacing
  flex: boolean
  height: number | string
  width: number | string
  maxWidth: 'initial' | number
  border: {
    radius?: TBorderRadiusTokenEnum
    color?: TColorTokenEnum
    size?: TBorderSizeTokenEnum
  }
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

type TResponsive = {
  responsive?: { [key in TBreakpointTokenEnum]?: Partial<TProps> }
}

const convertAlignTokenToStyle = (align?: TProps['justify'] | TProps['align']) => {
  if (!align) {
    return null
  }

  switch (align) {
    case 'between':
      return 'space-between'
    case 'end':
      return 'flex-end'
    case 'start':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'initial':
    default:
      return 'initial'
  }
}

const convertGapTokenToStyle = (theme: TTheme, gap?: TProps['gap']): CSSObject => {
  if (!gap) {
    return {}
  }

  return {
    gap: theme.gap[gap],
  }
}

const convertColorTokenToStyle = (theme: TTheme, background?: TProps['background']) => {
  if (!background) {
    return null
  }

  if (typeof background === 'string') {
    return theme.color[background]
  }

  return rgba(theme.color[background.color], background.opacity)
}

const convertMaxWidthToStyle = (maxWidth?: TProps['maxWidth'] | null): null | string => {
  if (!maxWidth) {
    return null
  }

  if (typeof maxWidth === 'string') {
    return 'initial'
  }

  return `${maxWidth}rem`
}

const convertBorderToStyle = (theme: TTheme, border?: TProps['border']): CSSObject => {
  if (!border) {
    return {}
  }

  const borderRadius =
    border.radius && border.radius !== 'none' ? theme.border.radius[border.radius] : null

  return {
    ...(borderRadius && {
      borderRadius,
    }),
    ...(border.size &&
      border.size !== 'none' && {
        border: `${theme.border.size[border.size]} solid ${theme.color[border.color || 'border']}`,
      }),
  }
}

const convertSpacingToStyle = (
  theme: TTheme,
  spacing?: TProps['padding'] | TProps['margin'],
): string => {
  if (!spacing) {
    return ''
  }

  if (typeof spacing === 'string') {
    return theme.spacing[spacing]
  }

  const hor = spacing.horizontal ? theme.spacing[spacing.horizontal] : null
  const ver = spacing.vertical ? theme.spacing[spacing.vertical] : null

  if (ver && hor) {
    return `${ver} ${hor}`
  }

  if (hor) {
    return `0 ${hor}`
  }

  if (ver) {
    return `${ver} 0`
  }

  return `${spacing.top ? theme.spacing[spacing.top] : '0'} ${
    spacing.right ? theme.spacing[spacing.right] : '0'
  } ${spacing.bottom ? theme.spacing[spacing.bottom] : '0'} ${
    spacing.left ? theme.spacing[spacing.left] : '0'
  }`
}

export const getStyles = ({
  theme,
  direction: flexDirection,
  justify,
  align,
  gap: gapValue,
  background,
  elevation,
  overflow,
  maxWidth: maxWidthValue,
  border: borderValue,
  padding: paddingValue,
  margin: marginValue,
  height,
  width,
  flex,
  $wrap,
  position,
  onClick,
}: { theme: TTheme } & Partial<TProps>): CSSObject => {
  const padding = convertSpacingToStyle(theme, paddingValue)
  const margin = convertSpacingToStyle(theme, marginValue)
  const maxWidth = convertMaxWidthToStyle(maxWidthValue)
  const alignItems = convertAlignTokenToStyle(align)
  const justifyContent = convertAlignTokenToStyle(justify)
  const backgroundColor = convertColorTokenToStyle(theme, background)
  const border = convertBorderToStyle(theme, borderValue)
  const gap = convertGapTokenToStyle(theme, gapValue)

  return {
    position,
    overflow,
    flexDirection,
    flex: flex ? '1 1' : '0 0 auto',
    display: 'flex',
    ...(elevation && { boxShadow: theme.elevation[elevation] }),
    ...(maxWidth && { maxWidth }),
    ...(alignItems && { alignItems }),
    ...(justifyContent && { justifyContent }),
    ...(backgroundColor && { backgroundColor }),
    ...border,
    ...gap,
    ...($wrap && {
      flexWrap: 'wrap',
    }),
    ...(onClick && { cursor: 'pointer' }),
    ...(height && {
      height: typeof height === 'string' ? height : `${height}rem`,
    }),
    ...(width && {
      width: typeof width === 'string' ? width : `${width}rem`,
    }),
    ...(margin && { margin }),
    ...(padding && { padding }),
  }
}

export const StyledContainer = styled('div')<TProps & TResponsive>(({ responsive, ...props }) => {
  return {
    ...getStyles(props),
    ...mergeResponsiveStyles(responsive, getStyles, props.theme),
  }
})

export type TFlexStylesProps = TProps & TResponsive
