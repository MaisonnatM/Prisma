import { Flex } from '@src/components/_core'
import React, { PropsWithChildren } from 'react'

import { MainHeader } from './header'
import { StyledContainer } from './layout.styled'

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledContainer
      background="background"
      padding={{ bottom: 'huge' }}
      flex={false}
      justify="center"
    >
      <Flex gap="xxxlarge" direction="column" maxWidth={102.4} width="100%">
        <MainHeader />
        {children}
      </Flex>
    </StyledContainer>
  )
}

export default MainLayout
