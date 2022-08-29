import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import favicon from '../public/favicon.ico'


const Home: NextPage = () => {

  return (
    <div className="">
      <Head>
        <title>Minth Blog</title>
        <meta name="description" content="Blog sur le developpement de mes applications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
    
  )
}

export default Home
