import styled from '@emotion/styled'
import { mergeResponsiveStyles, TBreakpointTokenEnum } from '@src/utils'
import { ImageProps } from 'next/image'

export const StyledImageContainer = styled('div')<{
  width?: number | string
  height?: number | string
  responsive?: { [key in TBreakpointTokenEnum]?: Partial<ImageProps> }
}>(({ responsive, width, height }) => {
  return {
    position: 'relative',
    width,
    height,

    ...mergeResponsiveStyles(responsive, data => ({
      ...data,
    })),
  }
})
