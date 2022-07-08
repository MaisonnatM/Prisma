export type TGapTokenEnum =
  | 'none'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge'

export const GAP_TO_SIZE: { [key in TGapTokenEnum]: string } = {
  none: '0',
  xxsmall: '0.4rem',
  xsmall: '0.8rem',
  small: '1.2rem',
  medium: '1.6rem',
  large: '2.4rem',
  xlarge: '3.2rem',
  xxlarge: '4.8rem',
  xxxlarge: '6.4rem',
}

export const gap = GAP_TO_SIZE
