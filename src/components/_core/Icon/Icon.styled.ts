import styled, { CSSObject } from '@emotion/styled'
import { TTheme } from '@src/providers'

type Props = {
  color: keyof TTheme['color']
  size:
    | 'small'
    | 'medium'
    | 'lg-medium'
    | 'large'
    | 'xlarge'
    | 'sm-medium'
    | 'xsm-medium'
    | 'x-small'
    | 'sm-large'
    | 'xxlarge'
  spinning: boolean
  rotate: number
  width?: string
}

const getSizeStyles = (size: Props['size']): CSSObject => {
  switch (size) {
    case 'xxlarge':
      return {
        height: '90px',
      }
    case 'xlarge':
      return {
        height: '60px',
      }
    case 'large':
      return {
        height: '48px',
      }
    case 'sm-large':
      return {
        height: '42px',
      }
    case 'lg-medium':
      return {
        height: '32px',
      }
    case 'medium':
      return {
        height: '24px',
      }
    case 'sm-medium':
      return {
        height: '20px',
      }
    case 'xsm-medium':
      return {
        height: '18px',
      }
    case 'small':
      return {
        height: '12px',
      }
    case 'x-small':
      return {
        height: '8px',
      }
    default:
      return {}
  }
}

const getSpinningStyles = (props: Props): CSSObject => {
  if (!props.spinning) {
    return {}
  }

  return {
    '@keyframes rotating': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    'animation': 'rotating 1s linear infinite',
  }
}

const getRotateStyles = (rotate: Props['rotate']): CSSObject => {
  if (!rotate) {
    return {}
  }

  return {
    transform: `rotate(${rotate}deg)`,
  }
}

export const StyledIcon = styled('span')<Props>(({ theme, width, ...props }) => {
  return {
    width,
    display: 'inline-flex',
    alignItems: 'center',
    ...getSpinningStyles(props),
    svg: {
      'fill': theme.color[props.color],
      ...getSizeStyles(props.size),

      '& > *': {
        fill: theme.color[props.color],
      },
    },
    ...getRotateStyles(props.rotate),
  }
})

export type StyledIconProps = Props
