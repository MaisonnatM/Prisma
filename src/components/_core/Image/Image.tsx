import { TBreakpointTokenEnum, useScreenSize } from '@src/utils'
import NextImage, { ImageProps } from 'next/image'
import React, { FunctionComponent, useMemo } from 'react'

import { StyledImageContainer } from './Image.styled'

type Props = {
  src?: string
  alt?: string
  onLoad?: () => void
  removeContainer?: boolean
  responsive?: { [key in TBreakpointTokenEnum]?: Partial<ImageProps> }
} & {} & ImageProps

export const Image: FunctionComponent<Props> = ({
  src,
  onLoad,
  height,
  width,
  removeContainer,
  responsive,
  ...props
}) => {
  const { isTablet, isSmallTablet, isMobile } = useScreenSize()

  const isResponsive = useMemo(() => {
    return isTablet || isSmallTablet || isMobile
  }, [isMobile, isSmallTablet, isTablet])

  const {
    width: lastWidth,
    height: lastHeight,
    layout,
  } = useMemo(() => {
    if (isResponsive) {
      const resLayout =
        responsive?.mobile?.layout ||
        responsive?.['small-tablet']?.layout ||
        responsive?.tablet?.layout ||
        props.layout

      if (resLayout === 'fill') {
        return {
          layout: resLayout,
        }
      }

      return {
        height:
          responsive?.mobile?.height ||
          responsive?.['small-tablet']?.height ||
          responsive?.tablet?.height ||
          height,
        width:
          responsive?.tablet?.width ||
          responsive?.['small-tablet']?.width ||
          responsive?.mobile?.width ||
          width,
      }
    }

    return {
      height: responsive?.desktop?.height || height,
      width: responsive?.desktop?.width || width,
      layout: props.layout,
    }
  }, [height, isResponsive, props.layout, responsive, width])

  if (!lastHeight && !lastWidth && !layout) {
    return <></>
  }

  if (removeContainer) {
    return <NextImage onLoad={onLoad} width={lastWidth} height={lastHeight} src={src} {...props} />
  }

  return (
    <StyledImageContainer
      responsive={responsive}
      width={width || responsive?.desktop?.width}
      height={height || responsive?.desktop?.height}
    >
      <NextImage
        onLoad={onLoad}
        src={src}
        height={lastHeight}
        width={lastWidth}
        layout={layout}
        {...props}
      />
    </StyledImageContainer>
  )
}

Image.defaultProps = {
  objectFit: 'cover',
}

export type TImageProps = Props
