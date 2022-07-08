import { CSSObject } from '@emotion/react'
import { TTheme } from '@src/providers'
import { isArray, isTrue } from '@src/utils'

export enum SideEnum {
  'all',
  'vertical',
  'horizontal',
  'top' = 'borderTop',
  'left' = 'borderLeft',
  'bottom' = 'borderBottom',
  'right' = 'borderRight',
}

export enum StyleEnum {
  'solid',
  'dashed',
  'dotted',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
  'hidden',
}

export type Border = Partial<{
  color: keyof TTheme['color']
  side: keyof typeof SideEnum
  style: keyof typeof StyleEnum
  size: keyof TTheme['border']['size']
}>

export type BorderType = {
  border: boolean | Border | Border[]
}

const getBorderValue = (theme: TTheme, border?: Border) => {
  const {
    color: borderColor,
    border: { size: borderSize },
  } = theme

  const size = borderSize[border?.size || 'xsmall']
  const color = borderColor[border?.color || 'border']
  const style = border?.style || 'solid'

  const borderStyle = `${size} ${style} ${color}`

  switch (border?.side) {
    case 'bottom':
    case 'left':
    case 'right':
    case 'top':
      return {
        [SideEnum[border.side]]: borderStyle,
      }
    case 'horizontal': {
      return {
        borderRight: borderStyle,
        borderLeft: borderStyle,
      }
    }
    case 'vertical': {
      return {
        borderBottom: borderStyle,
        borderTop: borderStyle,
      }
    }
    case 'all':
    default: {
      return {
        border: borderStyle,
      }
    }
  }
}

export const getBorderStyles = (border: BorderType['border'], theme: TTheme): CSSObject => {
  if (!border) {
    return {}
  }

  if (isArray(border)) {
    const values = border.reduce(
      (total, item) => ({
        ...total,
        ...getBorderValue(theme, item),
      }),
      {},
    )

    return { ...values } as CSSObject
  }

  if (isTrue(border)) {
    return getBorderValue(theme, undefined)
  }

  return {
    ...getBorderValue(theme, border),
  }
}
