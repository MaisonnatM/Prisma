import { Movie } from '@src/api'
import React, { FunctionComponent } from 'react'

import { AllMovies } from './AllMovies'
import { TopRatedMovies } from './TopRatedMovies'

type TProps = {
  topRatedMovies: Movie[]
  allMovies: Movie[]
}

const HomeView: FunctionComponent<TProps> = ({ allMovies, topRatedMovies }) => {
  return (
    <>
      <TopRatedMovies topRatedMovies={topRatedMovies} />
      <AllMovies allMovies={allMovies} />
    </>
  )
}

export default HomeView

export type THomeViewProps = TProps
