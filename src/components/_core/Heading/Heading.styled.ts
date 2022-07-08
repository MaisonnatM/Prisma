import styled, { CSSObject } from '@emotion/styled'
import { TTheme } from '@src/providers'
import {
  mergeResponsiveStyles,
  responsiveStyle,
  TBreakpointTokenEnum,
  TColorTokenEnum,
  TTextWeightTokenEnum,
} from '@src/utils'

type TProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color?: TColorTokenEnum
  weight?: TTextWeightTokenEnum
  textAlign?: 'center' | 'left' | 'right'
}

type TResponsive = {
  responsive?: { [key in TBreakpointTokenEnum]?: Partial<TProps> }
}

export const VARIANT_TO_HEADING_LEVEL: { [key in TProps['variant']]: React.ElementType<any> } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
}

const getHeadingStyle = ({
  theme,
  variant,
  color,
  weight,
}: {
  theme: TTheme
  variant: TProps['variant']
  color: TProps['color']
  weight: TProps['weight']
}): CSSObject => {
  switch (variant) {
    case 'h1':
      return {
        fontSize: '2.6rem',
        lineHeight: '1',
        fontWeight: weight ? theme.text.weight[weight] : 700,
        color: color ? theme.color[color] : theme.color['dark-text'],
      }
    case 'h2':
      return {
        fontSize: '1.4rem',
        lineHeight: '1.1',
        fontWeight: weight ? theme.text.weight[weight] : 700,
        color: color ? theme.color[color] : theme.color['dark-text'],
      }
    case 'h3':
      return {
        fontSize: '2.5rem',
        lineHeight: '1.2',
        fontWeight: weight ? theme.text.weight[weight] : 700,
        color: color ? theme.color[color] : theme.color['dark-text'],

        ...responsiveStyle('tablet', {
          fontSize: '2.2rem',
        }),
      }
    case 'h4':
      return {
        fontSize: '1.7rem',
        lineHeight: '1',
        letterSpacing: '0.07rem',
        fontWeight: weight ? theme.text.weight[weight] : 500,
        color: color ? theme.color[color] : theme.color['dark-text'],
      }
    case 'h5':
      return {
        fontSize: '1.4rem',
        lineHeight: '1',
        fontWeight: weight ? theme.text.weight[weight] : 700,
        color: color ? theme.color[color] : theme.color['dark-text'],
      }
    case 'h6':
    default:
      return {
        fontSize: '1.3rem',
        lineHeight: '1',
        fontWeight: weight ? theme.text.weight[weight] : 700,
        color: color ? theme.color[color] : theme.color['dark-text'],
      }
  }
}

const getTextAlignStyles = ({ textAlign }: { textAlign: TProps['textAlign'] }): CSSObject => {
  if (!textAlign) {
    return {}
  }

  return {
    textAlign,
  }
}

export const StyledHeading = styled('div')<TProps & TResponsive>(
  ({ theme, variant, color, weight, textAlign, responsive }) => {
    return {
      fontFamily:
        "'Geomanist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'",
      ...getHeadingStyle({ theme, variant, color, weight }),
      ...getTextAlignStyles({ textAlign }),
      ...mergeResponsiveStyles(responsive, getHeadingStyle, theme),
      ...mergeResponsiveStyles(responsive, getTextAlignStyles, theme),
    }
  },
)

export type THeadingStylesProps = TProps & TResponsive
