import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Trending from '../components/Trending'

const Home: React.FC = () => {

  return (
    <div>
      <Head>
        <title>UAnimeList</title>
      </Head>

      <main>
        <Navbar />
        <Trending />
      </main>
    </div>
  )
}

export default Home