import styled, { CSSObject } from '@emotion/styled'
import { TTheme } from '@src/providers'
import { mergeResponsiveStyles, TBreakpointTokenEnum, TGapTokenEnum } from '@src/utils'

import { Flex, TFlexProps } from '../Flex'

type TProps = {
  itemPerRow: number
  gap: TGapTokenEnum
} & TFlexProps

type TResponsive = {
  responsive?: { [key in TBreakpointTokenEnum]?: Partial<TProps> }
}

const isString = (value: unknown): value is string => typeof value === 'string'

const isNumeric = (string: string): boolean => {
  return !Number.isNaN(+string) && !Number.isNaN(parseFloat(string))
}

function getObjectKeyTyped<T>(obj: T): (keyof T)[] {
  return Object.keys(obj).filter(key => {
    return isString(key) && !isNumeric(key)
  }) as (keyof T)[]
}

const getGapStyles = (props: TFlexProps, theme: TTheme): CSSObject => {
  if (!props.gap || !props.direction) {
    return {}
  }

  const selector = ['column-reverse', 'row-reverse'].includes(props.direction)
    ? ':first-child'
    : ':last-child'

  if (['column', 'column-reverse'].includes(props.direction)) {
    return {
      '& > *': {
        [`&:not(${selector})`]: { marginBottom: theme.gap[props.gap] },
      },
    }
  }

  if (['row', 'row-reverse'].includes(props.direction)) {
    return {
      '& > *': {
        [`&:not(${selector})`]: { marginRight: theme.gap[props.gap] },
      },
    }
  }

  return {}
}

const getStyles = ({ theme, ...props }: { theme: TTheme } & TProps): CSSObject => {
  const gapSize = props.gap ? theme.gap[props.gap] : '0px'

  const itemWidth = `calc(${100 / props.itemPerRow}% - ${gapSize === '0' ? '0px' : gapSize}  / ${
    props.itemPerRow
  } * ${props.itemPerRow - 1})`

  const nthChild = `&:nth-child(${props.itemPerRow}n)`

  const gapStyles = getGapStyles(props, theme)

  const gap = gapStyles[getObjectKeyTyped(gapStyles)[0]] as CSSObject

  return {
    'flexWrap': 'wrap',

    '& > *': {
      'flex': `0 0 ${itemWidth} !important`,

      '&:last-child': {
        flex: `0 0 ${itemWidth} !important`,
      },

      [nthChild]: {
        marginRight: '0 !important',
      },

      ...gap,
    },
  }
}

export const StyledContainer = styled(Flex)<TProps & TResponsive>(
  ({ theme, itemPerRow, direction, ...props }) => {
    return {
      ...getStyles({ theme, itemPerRow, ...props }),
      ...mergeResponsiveStyles({ ...props.responsive }, getStyles, theme, { gap: props.gap }),
    }
  },
)

export type TGridStylesProps = TProps & TResponsive
