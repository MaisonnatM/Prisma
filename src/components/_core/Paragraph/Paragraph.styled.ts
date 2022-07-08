import styled from '@emotion/styled'
import {
  getDefaultTextStyle,
  mergeResponsiveStyles,
  TBreakpointTokenEnum,
  TDefaultTextProps,
} from '@src/utils'

type TProps = {} & TDefaultTextProps

type TResponsive = {
  responsive?: { [key in TBreakpointTokenEnum]?: Partial<TProps> }
}

export const StyledContainer = styled('p')<TProps & TResponsive>(({ responsive, ...props }) => {
  return {
    ...getDefaultTextStyle(props),
    ...mergeResponsiveStyles(responsive, getDefaultTextStyle, props.theme),
  }
})

export type TParagraphStylesProps = TProps & TResponsive
