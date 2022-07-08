export type TSpacingTokenEnum =
  | 'none'
  | 'xxxsmall'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'huge'
  | 'xhuge'

export const SPACING_TO_VALUE: { [key in TSpacingTokenEnum]: string } = {
  none: '0',
  xxxsmall: '0.2rem',
  xxsmall: '0.4rem',
  xsmall: '0.8rem',
  small: '1.2rem',
  medium: '1.6rem',
  large: '2.4rem',
  xlarge: '3.2rem',
  xxlarge: '4.8rem',
  huge: '6.4rem',
  xhuge: '9rem',
}

export const spacing = SPACING_TO_VALUE
