import React, { FunctionComponent, PropsWithChildren } from 'react'

import { StyledContainer, TFlexStylesProps } from './Flex.styled'

type TProps = {
  forwardRef?: React.Ref<HTMLDivElement>
  tabIndex?: number
  as?: 'footer' | 'header' | 'section' | 'a' | 'button' | 'form'
  wrap?: boolean
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: 'noopener'
} & Partial<Omit<TFlexStylesProps, '$wrap'>>

export const Flex: FunctionComponent<PropsWithChildren<TProps>> = ({
  forwardRef,
  wrap,
  ...props
}) => {
  return (
    <StyledContainer {...(props as TFlexStylesProps)} $wrap={wrap as boolean} ref={forwardRef} />
  )
}

Flex.defaultProps = {
  direction: 'row',
  justify: 'initial',
  align: 'initial',
  gap: 'none',
  background: 'none',
  elevation: 'none',
  overflow: 'initial',
  position: 'initial',
  maxWidth: 'initial',
  padding: {},
  margin: {},
  border: {
    radius: 'none',
    color: 'none',
    size: 'none',
  },
  flex: true,
  wrap: false,
}

export type TFlexProps = TProps
