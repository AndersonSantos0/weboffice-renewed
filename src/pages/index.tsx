import Head from 'next/head'
import Menu from '../components/menu'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home Office</title>
      </Head>
      <Menu />
      <div style={{height: '60vh', width: '100vw', background: '-webkit-linear-gradient(45deg, var(--primary-color), var(--secondary-color)'}} />
    </div>
  )
}

export default Home