import { Movie } from '@src/api'
import { MoviePreview } from '@src/components/_common'
import { Flex, Grid, Heading, Paragraph } from '@src/components/_core'
import { getDozen } from '@src/utils'
import React, { FunctionComponent, useEffect, useState } from 'react'

import { StyledButton } from './AllMovies.styled'
import { Pagination } from './Pagination'

type TProps = {
  allMovies: Movie[]
}

export const AllMovies: FunctionComponent<TProps> = ({ allMovies: movies }) => {
  const [pagination, setPagination] = useState(1)
  const [showedMovies, setShowedMovies] = useState<Movie[]>([])
  const [paginedMovies, setPaginedMovies] = useState<{ [key in number]: Movie[] }>({})
  const [orderByAlphabetical, setOrderByAlphabetical] = useState(false)

  const getSortBy = (isOrderByAlphabetical: boolean) =>
    isOrderByAlphabetical ? 'sort_by=original_title.asc' : 'sort_by=vote_average.desc'

  const fetchNewMovies = async (page: number) => {
    const newMovies: Movie[] = await fetch(
      `https://api.themoviedb.org/3/discover/movie?${getSortBy(
        orderByAlphabetical,
      )}&certification_country=FR&vote_count.gte=100&page=${Math.round(
        page / 2,
      )}&api_key=b97a9bf8bdec16b4517476e98e025509&language=fr-Fr`,
    )
      .then(res => res.json())
      .then(d => d.results)

    setPaginedMovies({
      ...paginedMovies,
      [page]: newMovies.slice(0, 10),
      [page + 1]: newMovies.slice(10, 20),
    })

    setPagination(page)
  }

  const onPaginationClicked = (page: number) => {
    setPagination(page)

    if (!paginedMovies[page]?.length) {
      fetchNewMovies(page)
    }
  }

  const onOrderByAlphabeticalClicked = async () => {
    const newMovies = await fetch(
      `https://api.themoviedb.org/3/discover/movie?${getSortBy(
        !orderByAlphabetical,
      )}&certification_country=FR&vote_count.gte=100&page=1&api_key=b97a9bf8bdec16b4517476e98e025509&language=fr-Fr`,
    )
      .then(r => r.json())
      .then(d => d.results)

    setPaginedMovies({ 1: newMovies.slice(0, 10), 2: newMovies.slice(10, 20) })
    setPagination(1)

    setOrderByAlphabetical(!orderByAlphabetical)
  }

  useEffect(() => {
    if (paginedMovies[pagination]) {
      setShowedMovies(paginedMovies[pagination] || [])
    }
  }, [pagination, paginedMovies])

  useEffect(() => {
    const reducedMovies = movies.reduce((prev, movie, index) => {
      const dozen = getDozen(index) / 10

      if (index % 10 === 0) {
        return {
          ...prev,
          [dozen + 1]: [movie],
        }
      }

      return {
        ...prev,
        [dozen]: prev[dozen]?.length ? [...prev[dozen], movie] : [movie],
      }
    }, {} as { [key in number]: Movie[] })

    setShowedMovies(reducedMovies[1])
    setPaginedMovies(reducedMovies)
  }, [movies])

  return (
    <Flex align="center" direction="column" gap="xxlarge" flex={false}>
      <Flex direction="column" gap="xxlarge" flex={false}>
        <Heading variant="h1" color="light-text">
          Tous les films
        </Heading>
        <Flex direction="row" gap="xsmall" align="center">
          <Paragraph size="xxsmall" color="primary">
            Trier par :
          </Paragraph>
          <StyledButton active={orderByAlphabetical} onClick={onOrderByAlphabeticalClicked}>
            Ordre alphabétique
          </StyledButton>
        </Flex>
        <Grid itemPerRow={5} gap="xxxlarge">
          {showedMovies.map(movie => (
            <MoviePreview key={movie.id} {...movie} />
          ))}
        </Grid>
      </Flex>
      <Pagination pagination={pagination} onPaginationClicked={onPaginationClicked} />
    </Flex>
  )
}

export type TAllMoviesProps = TProps
