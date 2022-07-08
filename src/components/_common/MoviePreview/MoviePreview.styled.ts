import styled from '@emotion/styled'
import { Flex } from '@src/components/_core'

export const StyledContainer = styled(Flex)(() => {
  return {
    'transition': 'all ease-in-out 0.3s',
    'cursor': 'pointer',
    'willChange': 'transform',

    '&:hover': {
      transform: 'scale(1.1)',
    },
  }
})
