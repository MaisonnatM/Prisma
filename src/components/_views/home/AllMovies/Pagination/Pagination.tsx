import { Flex, Icon } from '@src/components/_core'
import React, { FunctionComponent } from 'react'

import { StyledButton } from './Pagination.styled'

type TProps = {
  pagination: number
  onPaginationClicked: (pagination: number) => void
}

export const Pagination: FunctionComponent<TProps> = ({ pagination, onPaginationClicked }) => {
  const onPaginationButtonClicked = (page: number) => {
    if (!(page === pagination)) {
      onPaginationClicked(page)
    }
  }

  return (
    <Flex direction="row" gap="medium">
      <StyledButton disabled={pagination === 1} onClick={() => onPaginationClicked(pagination - 1)}>
        <Icon size="small" icon="paginationLeftArrow" color="primary" />
      </StyledButton>
      {Array.from({ length: 11 }).map((_, index) => (
        <StyledButton
          key={index}
          active={index + 1 === pagination}
          onClick={() => onPaginationButtonClicked(index + 1)}
        >
          {index + 1}
        </StyledButton>
      ))}
      <StyledButton
        disabled={pagination === 11}
        onClick={() => onPaginationClicked(pagination + 1)}
      >
        <Icon size="small" icon="paginationRightArrow" color="primary" />
      </StyledButton>
    </Flex>
  )
}

export type TPaginationProps = TProps
