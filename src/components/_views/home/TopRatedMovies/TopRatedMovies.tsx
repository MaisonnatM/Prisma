import { Movie } from '@src/api'
import { MoviePreview } from '@src/components/_common'
import { Flex, Grid, Heading, Icon } from '@src/components/_core'
import React, { FunctionComponent, useEffect, useState } from 'react'

import { StyledNavigationButton, StyledSeparator } from './TopRatedMovies.styled'

type TProps = {
  topRatedMovies: Movie[]
}

export const TopRatedMovies: FunctionComponent<TProps> = ({ topRatedMovies: movies }) => {
  const [showedMovies, setShowedMovies] = useState<Movie[]>([])
  const [indexShowedMovies, setIndexShowedMovies] = useState(4)

  useEffect(() => {
    setShowedMovies(movies.slice(0, 4))
  }, [movies])

  const showNextMovies = () => {
    const newIndex = indexShowedMovies + 4

    setIndexShowedMovies(newIndex)
    setShowedMovies(movies.slice(indexShowedMovies, newIndex))
  }

  const showPreviousMovies = () => {
    const newIndex = indexShowedMovies - 4

    setIndexShowedMovies(newIndex)
    setShowedMovies(movies.slice(newIndex - 4, newIndex))
  }

  return (
    <Flex direction="column" gap="xxlarge" flex={false}>
      <Heading variant="h1" color="light-text">
        Les 10 meilleurs films
      </Heading>
      <Flex direction="row" gap="xxlarge" align="center">
        <StyledNavigationButton disabled={indexShowedMovies === 4} onClick={showPreviousMovies}>
          <Icon icon="leftArrow" />
        </StyledNavigationButton>
        <Grid itemPerRow={4} direction="row" gap="xxxlarge">
          {showedMovies.map(movie => (
            <MoviePreview key={movie.id} {...movie} />
          ))}
        </Grid>
        <StyledNavigationButton
          disabled={indexShowedMovies >= movies.length}
          onClick={showNextMovies}
        >
          <Icon icon="rightArrow" />
        </StyledNavigationButton>
      </Flex>
      <StyledSeparator />
    </Flex>
  )
}

export type TTopRatedMoviesProps = TProps
