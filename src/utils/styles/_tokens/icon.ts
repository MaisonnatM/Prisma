export type TIconSizeTokenEnum =
  | 'none'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'

export const ICON_SIZE_TO_VALUE: { [key in TIconSizeTokenEnum]: number } = {
  none: 0,
  xxsmall: 0.8,
  xsmall: 1.2,
  small: 1.6,
  medium: 2,
  large: 2.4,
  xlarge: 3.2,
}

export const icon = ICON_SIZE_TO_VALUE
