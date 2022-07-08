import { CSSObject } from '@emotion/react'
import { TTheme } from '@src/providers'
import { BREAKPOINT_TO_VALUE, TBreakpointTokenEnum } from './_tokens/breakpoint'

export const responsiveStyle = (size: TBreakpointTokenEnum, style: CSSObject): CSSObject => {
  if (size === 'desktop') {
    return {
      [`@media (min-width: ${BREAKPOINT_TO_VALUE[size]}0px)`]: {
        ...style,
      },
    }
  }

  return {
    [`@media (max-width: ${BREAKPOINT_TO_VALUE[size]}0px)`]: {
      ...style,
    },
  }
}

export const mergeResponsiveStyles = (
  responsives?: {
    [key in TBreakpointTokenEnum]?: any
  },
  callback?: (props: any) => CSSObject,
  theme?: TTheme,
  styleToAddIfEmpty?: any,
): CSSObject => {
  const allResponsives = (responsives ? Object.keys(responsives) : null) as
    | TBreakpointTokenEnum[]
    | null

  if (!allResponsives || !callback) {
    return {}
  }

  return allResponsives
    ?.map(r => {
      if (!responsives) {
        return {}
      }

      const cssObject = responsives[r]

      if (!cssObject) {
        return {}
      }

      return responsiveStyle(r, {
        ...callback({ theme, ...styleToAddIfEmpty, ...cssObject }),
      })
    })
    .reduce((finalObj, css) => {
      return {
        ...finalObj,
        ...css,
      }
    }, {})
}
