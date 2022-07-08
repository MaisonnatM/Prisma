import React, { FunctionComponent, PropsWithChildren } from 'react'

import { StyledContainer, TGridStylesProps } from './Grid.styled'

type TProps = {} & Partial<TGridStylesProps>

export const Grid: FunctionComponent<PropsWithChildren<TProps>> = ({ ...props }) => {
  return <StyledContainer direction="row" {...(props as TGridStylesProps)} />
}

Grid.defaultProps = {
  itemPerRow: 3,
  gap: 'none',
  direction: 'row',
}

export type TGridProps = TProps
