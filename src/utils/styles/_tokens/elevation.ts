import { rgba } from 'emotion-rgba'

export type TElevationTokenEnum = 'none' | 'xxsmall' | 'xsmall' | 'medium' | 'large' | 'xlarge'

export const ELEVATION_TO_VALUE: { [key in TElevationTokenEnum]: string } = {
  none: 'none',
  xxsmall: `0 0.1rem 0.2rem ${rgba('#000', 0.08)}`,
  xsmall: `0 0.2rem 0.4rem ${rgba('#000', 0.18)}`,
  medium: `0 0.4rem 1.2rem ${rgba('#000', 0.05)}`,
  large: `0 0.6rem 2rem ${rgba('#000', 0.2)}`,
  xlarge: ``,
}

export const elevation = ELEVATION_TO_VALUE
