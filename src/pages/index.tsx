import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Navbar />
      </main>
    </div>
  )
}

export default Home