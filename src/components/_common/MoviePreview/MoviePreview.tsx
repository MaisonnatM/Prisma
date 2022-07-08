import { Movie } from '@src/api'
import { Flex, Heading, Image, Paragraph } from '@src/components/_core'
import React, { FunctionComponent } from 'react'

import { StyledContainer } from './MoviePreview.styled'

type TProps = {} & Movie

export const MoviePreview: FunctionComponent<TProps> = ({ ...movie }) => {
  return (
    <StyledContainer direction="column" gap="small" height={27.5}>
      <Flex flex={false} overflow="hidden" border={{ radius: 'medium' }}>
        <Image
          height={200}
          layout="fill"
          objectFit="cover"
          width="100%"
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
        />
      </Flex>
      <Flex flex={false} direction="column" gap="xxsmall">
        <Heading variant="h2" color="light-text">
          {movie.title}
        </Heading>
        <Paragraph size="xxsmall" color="primary">
          {movie.release_date ? movie.release_date.split('-')[0] : 'Not released'}
        </Paragraph>
      </Flex>
    </StyledContainer>
  )
}

export type TMoviePreviewProps = TProps
