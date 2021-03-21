import Head from 'next/head'
import Menu from '../components/menu'
import SocialTab from '../components/socialTab'
import LogoText from '../components/vectors/logo-text'
import PrimaryWave from '../components/vectors/primary-wave'
import { Portfolio, Section } from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>WebOffice</title>
      </Head>
      <Menu />
      <Portfolio>
        <LogoText />
        <SocialTab style={{ position: 'absolute', right: 16, bottom: 48 }} />
      </Portfolio>
      <Section>
        <PrimaryWave style={{ position: 'absolute', top: -48, width: "100%", height: 48 }} />
        <PrimaryWave style={{ position: 'absolute', zIndex: 2, bottom: -48, width: "100%", height: 48, transform: 'rotateX(180deg) rotateY(180deg)' }} />
      </Section>
      <Section color={"#444"} >

      </Section>
    </div>
  )
}

export default Home