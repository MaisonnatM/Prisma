import { Flex, Icon, Link } from '@src/components/_core'
import { Input } from '@src/components/_core/Input'
import React, { FunctionComponent } from 'react'

type TProps = {}

const MainHeader: FunctionComponent<TProps> = () => {
  const [search, setSearch] = React.useState('')

  return (
    <Flex
      flex={false}
      align="center"
      direction="row"
      justify="between"
      padding={{ vertical: 'xlarge' }}
    >
      <Link href="/">
        <Icon size="lg-medium" icon="logo" />
      </Link>
      <Flex flex={false} width={32.5}>
        <Input
          value={search}
          onChange={e => setSearch(e.target.value)}
          inputSize="small"
          placeholder="Rechercher un film"
          icon="search"
        />
      </Flex>
    </Flex>
  )
}

export default MainHeader

export type TMainHeaderProps = TProps
