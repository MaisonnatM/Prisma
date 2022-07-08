export type TBorderRadiusTokenEnum =
  | 'none'
  | 'xxsmall'
  | 'xsmall'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'huge'

export const BORDER_RADIUS_TO_VALUE: { [key in TBorderRadiusTokenEnum]: string } = {
  none: '0',
  xxsmall: '0.2rem',
  xsmall: '0.4rem',
  medium: '0.8rem',
  large: '1.6rem',
  xlarge: '3.2rem',
  huge: '99rem',
}

export type TBorderSizeTokenEnum = 'none' | 'xxsmall' | 'xsmall'

export const BORDER_SIZE_TO_VALUE: { [key in TBorderSizeTokenEnum]: string } = {
  none: '0',
  xxsmall: '0.1rem',
  xsmall: '0.2rem',
}

export const border = {
  radius: BORDER_RADIUS_TO_VALUE,
  size: BORDER_SIZE_TO_VALUE,
}
