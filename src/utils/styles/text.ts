import { CSSObject } from '@emotion/react'
import { TTheme } from '@src/providers'

import { TColorTokenEnum, TTextSizeTokenEnum, TTextWeightTokenEnum } from '.'

type TProps = {
  theme: TTheme
  size: TTextSizeTokenEnum
  weight: TTextWeightTokenEnum
  textAlign: 'initial' | 'center' | 'right' | 'left'
  color: TColorTokenEnum
  ellipsis?: boolean
  textTransform?: 'uppercase' | 'initial'
}

const getEllipsisStyle = (ellipsis: TProps['ellipsis']): CSSObject => {
  if (!ellipsis) {
    return {}
  }

  return { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }
}

const convertSizeTokenToStyle = (theme: TTheme, size: TProps['size']): CSSObject => {
  if (!size) {
    return {}
  }

  const { fontSize, lineHeight } = theme.text.size[size]

  return {
    fontSize: `${fontSize}rem`,
    lineHeight: `${lineHeight}rem`,
  }
}

export const getDefaultTextStyle = ({
  theme,
  textAlign,
  color,
  weight,
  size,
  ellipsis,
  textTransform,
}: TProps): CSSObject => {
  return {
    textAlign,
    color: theme.color[color],
    fontWeight: theme.text.weight[weight],
    ...(textTransform && {
      textTransform: textTransform === 'initial' ? 'initial' : 'uppercase',
    }),
    ...convertSizeTokenToStyle(theme, size),
    ...getEllipsisStyle(ellipsis),
  }
}

export const TEXT_DEFAULT_PROPS: Omit<TProps, 'theme'> = {
  ellipsis: false,
  weight: 'regular',
  textAlign: 'initial',
  size: 'medium',
  color: 'dark-text',
}

export type TDefaultTextProps = TProps
