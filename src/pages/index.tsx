import Head from 'next/head'
import Menu from '../components/menu'
import SocialTab from '../components/socialTab'
import LogoText from '../components/vectors/logo-text'
import { Portfolio } from '../styles/IndexStyle'

const Home = () => {
  return (
    <div>
      <Head>
        <title>WebOffice</title>
      </Head>
      <Menu />
      <Portfolio>
        <LogoText />
        <SocialTab style={{position: 'absolute', right: 16, bottom: 16}} />
      </Portfolio>
    </div>
  )
}

export default Home