export type TBreakpointTokenEnum = 'desktop' | 'tablet' | 'small-tablet' | 'mobile'

export const BREAKPOINT_TO_VALUE: { [key in TBreakpointTokenEnum]: number } = {
  desktop: 91,
  tablet: 90,
  'small-tablet': 72,
  mobile: 55,
}

export const DESKTOP_QUERY = `(min-width: ${BREAKPOINT_TO_VALUE['tablet']}1px)`
export const TABLET_QUERY = `(max-width: ${BREAKPOINT_TO_VALUE['tablet']}0px)`
export const SMALL_TABLET_QUERY = `(max-width: ${BREAKPOINT_TO_VALUE['small-tablet']}0px)`
export const MOBILE_QUERY = `(max-width: ${BREAKPOINT_TO_VALUE['mobile']}0px)`

export const breakpoint = {
  desktop: DESKTOP_QUERY,
  tablet: TABLET_QUERY,
  smallTablet: SMALL_TABLET_QUERY,
  mobile: MOBILE_QUERY,
}
