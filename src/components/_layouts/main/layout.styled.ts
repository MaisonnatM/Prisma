import styled from '@emotion/styled'
import { Flex } from '@src/components/_core'

export const StyledContainer = styled(Flex)(({ theme }) => {
  return {
    '&:before': {
      content: "''",
      width: '100%',
      height: '80vh',
      position: 'absolute',
      background:
        "url('https://res.cloudinary.com/kuleroo/image/upload/v1657202453/d3a5b33b7d42a980fa5836a967cc9ca1_uhohpx.jpg')",
      backgroundSize: 'cover',
      opacity: 0.2,
    },

    '& > *': {
      zIndex: '1',
    },
  }
})
