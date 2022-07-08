import NextLink from 'next/link'
import React, { FunctionComponent, PropsWithChildren } from 'react'

import { StyledContainer, TLinkStylesProps } from './Link.styled'

type TProps = {
  href: string
  as?: string
  target?: '_blank'
  title?: string
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}

export const Link: FunctionComponent<PropsWithChildren<TProps & Partial<TLinkStylesProps>>> = ({
  href,
  as,
  ...props
}) => {
  return (
    <NextLink href={href} as={as} passHref>
      <StyledContainer {...(props as TLinkStylesProps)} />
    </NextLink>
  )
}

Link.defaultProps = {
  variant: 'primary',
  fullheight: false,
}

export type TLinkProps = TProps
