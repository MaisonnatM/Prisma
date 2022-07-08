import styled, { CSSObject } from '@emotion/styled'
import { TTheme } from '@src/providers'
import { getDefaultTextStyle, TDefaultTextProps } from '@src/utils'

type TProps = {
  variant: 'primary' | 'secondary' | 'footer' | 'footer-white' | 'no-styles'
  fullheight?: boolean
} & TDefaultTextProps

const convertVariantToStyles = (
  theme: TTheme,
  variant: TProps['variant'],
  props: Omit<TDefaultTextProps, 'theme'>,
): CSSObject => {
  switch (variant) {
    case 'primary':
      return {
        'color': theme.color['link-primary'],
        'fontWeight': theme.text.weight[props.weight] || theme.text.weight['semi-bold'],

        '&:hover': {
          color: theme.color.primary,
        },
      }
    case 'secondary':
      return {
        color: theme.color['link-secondary'],
        fontWeight: theme.text.weight.regular,
      }
    case 'footer': {
      return {
        color: theme.color.text,
        fontSize: theme.text.size.small.fontSize,
        lineHeight: theme.text.size.small.lineHeight,
      }
    }
    case 'footer-white': {
      return {
        color: theme.color['light-text'],
        fontSize: theme.text.size.small.fontSize,
        lineHeight: theme.text.size.small.lineHeight,
      }
    }
    case 'no-styles':
    default: {
      return {
        ...getDefaultTextStyle({ theme, ...props }),
      }
    }
  }
}

export const StyledContainer = styled('a')<TProps>(({ variant, theme, fullheight, ...props }) => {
  return {
    transition: 'all .2s',
    ...getDefaultTextStyle({ theme, ...props }),
    ...convertVariantToStyles(theme, variant, props),
    ...(fullheight && {
      display: 'flex',
      alignItems: 'center',
    }),
    ...(variant !== 'no-styles' && {
      fontSize: '1.6rem',
      lineHeight: '2rem',
      textDecoration: 'none',
    }),
  }
})

export type TLinkStylesProps = TProps
