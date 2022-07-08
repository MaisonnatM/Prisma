export type TTextWeightTokenEnum = 'regular' | 'semi-bold' | 'bold'
export type TTextSizeTokenEnum =
  | 'none'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge'

export const TEXT_WEIGHT_TO_VALUE: { [key in TTextWeightTokenEnum]: number } = {
  'regular': 500,
  'semi-bold': 600,
  'bold': 900,
}

export const TEXT_SIZE_TO_VALUE: {
  [key in TTextSizeTokenEnum]: { fontSize: number; lineHeight: number }
} = {
  none: { fontSize: 0, lineHeight: 0 },
  xxsmall: { fontSize: 1.3, lineHeight: 1.6 },
  xsmall: { fontSize: 1.3, lineHeight: 2 },
  small: { fontSize: 1.4, lineHeight: 2 },
  medium: { fontSize: 1.6, lineHeight: 2 },
  large: { fontSize: 1.6, lineHeight: 2.4 },
  xlarge: { fontSize: 2.1, lineHeight: 3.2 },
  xxlarge: { fontSize: 2.8, lineHeight: 3.8 },
  xxxlarge: { fontSize: 4.8, lineHeight: 6 },
}

export const text = {
  weight: TEXT_WEIGHT_TO_VALUE,
  size: TEXT_SIZE_TO_VALUE,
}
