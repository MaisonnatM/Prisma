import { TEXT_DEFAULT_PROPS } from '@src/utils'
import React, { FunctionComponent, PropsWithChildren, useMemo } from 'react'

import { StyledContainer, TParagraphStylesProps } from './Paragraph.styled'

type TProps = {
  title?: string
}

export const Paragraph: FunctionComponent<
  PropsWithChildren<TProps & Partial<TParagraphStylesProps>>
> = ({ children, ...props }) => {
  const updatedChildren = useMemo(() => {
    return React.Children.toArray(children).map(item => {
      if (React.isValidElement(item)) {
        return React.cloneElement(item, { ...props, ...item.props })
      }

      return item
    })
  }, [children, props])

  return <StyledContainer {...(props as TParagraphStylesProps)}>{updatedChildren}</StyledContainer>
}

Paragraph.defaultProps = TEXT_DEFAULT_PROPS

export type TParagraphProps = TProps
