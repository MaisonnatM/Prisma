import { Movie } from '@src/api'
import { HomeView } from '@src/components/_views'
import type { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import React from 'react'

import { MainLayout } from '../components/_layouts'

const Home = ({
  topRatedMovies,
  allMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>MovieFinder</title>
      </Head>
      <MainLayout>
        <HomeView topRatedMovies={topRatedMovies} allMovies={allMovies} />
      </MainLayout>
    </>
  )
}

export async function getServerSideProps() {
  const topRatedMovies: Movie[] = await fetch(
    'https://api.themoviedb.org/3/discover/movie?top_rated&certification_country=FR&vote_count.gte=50&vote_count.gte=100&page=1&api_key=b97a9bf8bdec16b4517476e98e025509&language=fr-Fr',
  )
    .then(res => res.json())
    .then(d => d.results.slice(0, 10))

  const allMovies: Movie[] = await fetch(
    'https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&certification_country=FR&vote_count.gte=100&api_key=b97a9bf8bdec16b4517476e98e025509&language=fr-Fr',
  )
    .then(res => res.json())
    .then(d => d.results)

  return {
    props: {
      topRatedMovies,
      allMovies,
    },
  }
}

export default Home
