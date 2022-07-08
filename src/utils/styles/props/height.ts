import { isNumber, isString } from '@src/utils/isSomething'

export type HeightType = {
  height:
    | number
    | string
    | Partial<{
        height: number | string
        min: number | string
        max: number | string
      }>
}

export const getHeightStyles = (height: HeightType['height']) => {
  if (!height) {
    return {}
  }

  if (isNumber(height)) {
    return {
      height: `${height}px`,
    }
  }

  if (isString(height)) {
    return { height }
  }

  return {
    ...(height.height && {
      height: isNumber(height.height) ? `${height.height}px` : height.height,
    }),
    ...(height.max && { maxHeight: isNumber(height.max) ? `${height.max}px` : height.max }),
    ...(height.min && { minHeight: isNumber(height.min) ? `${height.min}px` : height.min }),
  }
}
