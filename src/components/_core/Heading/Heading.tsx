import React, { FunctionComponent, PropsWithChildren } from 'react'

import { StyledHeading, THeadingStylesProps, VARIANT_TO_HEADING_LEVEL } from './Heading.styled'

type TProps = {}

export const Heading: FunctionComponent<
  PropsWithChildren<TProps & Partial<THeadingStylesProps>>
> = ({ children, ...props }) => {
  return (
    <StyledHeading
      as={VARIANT_TO_HEADING_LEVEL[props.variant as THeadingStylesProps['variant']]}
      {...(props as THeadingStylesProps)}
    >
      {children}
    </StyledHeading>
  )
}

export type THeadingProps = TProps
