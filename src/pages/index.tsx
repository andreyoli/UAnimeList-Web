import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Trending from '../components/Trending'
import AllAnimes from '../components/AllAnimes'
import { AllAnimesQuery, TrendingQuery } from '../utils/graphqlQueries'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

const Home: React.FC = ({
  trendingData,
  allAnimesData
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>UAnimeList</title>
      </Head>

      <main>
        <Navbar />
        <Trending animeData={trendingData} />
        <AllAnimes animeData={allAnimesData} />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const trendingData = await TrendingQuery(4)
  const allAnimesData = await AllAnimesQuery(30)

  return {
    props: {
      trendingData,
      allAnimesData
    },
    revalidate: 604800
  }
}

export default Home
