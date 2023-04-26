import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { GetTodaySchedule } from '../utils/graphqlQueries'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import TodaySchedule from '../components/TodaySchedule'

const Schedule: React.FC = ({
  todaySchedule
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>UAnimeList - Airing Today</title>
      </Head>

      <main>
        <Navbar />
        <TodaySchedule animeData={todaySchedule} />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const todaySchedule = await GetTodaySchedule([
    136430,
    151801,
    145139,
    131518,
    128893,
    150075,
    153845,
    155783,
    157198,
    148048
  ])

  return {
    props: {
      todaySchedule
    },
    revalidate: 604800
  }
}

export default Schedule
