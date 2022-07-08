import { isNumber, isString } from '@src/utils/isSomething'

export type WidthType = {
  width:
    | number
    | string
    | Partial<{
        width: number | string
        min: number | string
        max: number | string
      }>
}

export const getWidthStyles = (width: WidthType['width']) => {
  if (!width) {
    return {}
  }

  if (isNumber(width)) {
    return {
      width: `${width}px`,
    }
  }

  if (isString(width)) {
    return { width }
  }

  return {
    ...(width.width && { width: isNumber(width.width) ? `${width.width}px` : width.width }),
    ...(width.max && { maxWidth: isNumber(width.max) ? `${width.max}px` : width.max }),
    ...(width.min && { minWidth: isNumber(width.min) ? `${width.min}px` : width.min }),
  }
}
