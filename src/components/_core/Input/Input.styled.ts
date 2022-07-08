import styled, { CSSObject } from '@emotion/styled'
import { TTheme } from '@src/providers'
import { getTextAlignStyles, NameType, TextAlignType } from '@src/utils'

import { Flex } from '../Flex'

type Props = {
  hasIcon?: boolean
  variant?: 'default'
  inputSize: 'default' | 'small'
  hasLabel?: boolean
  error?: boolean
  hasValue?: boolean
} & NameType &
  TextAlignType

const getIconSize = (theme: TTheme): CSSObject => {
  return {
    height: '18px',
    width: '18px',
    marginLeft: theme.spacing.small,
  }
}

const getSizeStyles = (props: Props): CSSObject => {
  switch (props.inputSize) {
    case 'small':
      return {
        height: '40px',
      }
    case 'default':
    default:
      if (props.variant === 'default') {
        return {
          height: '8rem',
        }
      }
      return {
        height: '54px',
      }
  }
}

const getVariantStyles = (props: Props, theme: TTheme): CSSObject => {
  const icon = getIconSize(theme)

  const paddingRight = props.hasIcon
    ? `calc(${icon.width} + ${icon.marginLeft} + ${theme.gap.medium})`
    : theme.gap.medium

  switch (props.variant) {
    case 'default':
      return {
        border: 'none',
        height: '8rem',
        paddingLeft: '20px',
        paddingRight,
        backgroundColor: '#253755',
        borderRadius: '14px',
        color: '#fff',
        fontSize: '12px',
        fontWeight: 400,
      }
    default:
      return {}
  }
}

export const StyledInput = styled('input')<Props>(({ theme, ...props }) => {
  return {
    'width': '100%',
    'fontSize': '16px',
    'lineHeight': 1,
    'color': theme.color['dark-text'],
    'fontWeight': 900,
    ...getTextAlignStyles(props.textAlign),
    ...getVariantStyles(props, theme),
    ...getSizeStyles(props),

    '&:focus': {
      outline: 'none',
    },

    '&::placeholder': {
      color: '#586E94',
      fontSize: '12px',
      fontWeight: 400,
    },
  }
})

export const StyledIconContainer = styled(Flex)(({ theme }) => {
  return {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'transparent',
    right: '20px',
    ...getIconSize(theme),
  }
})

export const StyledLabel = styled('label')<{ hasValue: boolean; hasFocus: boolean }>(
  ({ theme, hasValue, hasFocus }) => {
    return {
      color: theme.color.text,
      fontSize: '12px',
      fontWeight: 500,
      cursor: 'pointer',
      textTransform: 'uppercase',
      transition: 'all .2s ease',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: theme.spacing.medium,
      pointerEvents: 'none',

      ...((hasValue || hasFocus) && {
        position: 'absolute',
        fontSize: '10px',
        lineHeight: '10px',
        top: '14px',
      }),
    }
  },
)

export type StyledInputProps = Omit<Props, 'hasIcon'>
