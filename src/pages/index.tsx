import React from 'react'
import Head from 'next/head'
import Menu from '../components/menu'
import SocialTab from '../components/socialTab'
import LogoText from '../components/vectors/logo-text'
import PrimaryWave from '../components/vectors/primary-wave'
import { Portfolio, Section, StepsContainer } from '../styles/pages/home'
import StepItem from '../components/StepItem'

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>WebOffice</title>
            </Head>
            <Menu />
            <Portfolio>
                <LogoText />
                <SocialTab
                    style={{ position: 'absolute', right: 16, bottom: 48 }}
                />
            </Portfolio>
            <Section
                horizontal
                style={{ alignItems: 'center', justifyContent: 'center' }}
            >
                <PrimaryWave
                    style={{
                        position: 'absolute',
                        top: -48,
                        width: '100%',
                        height: 48
                    }}
                />
                <StepsContainer>
                    <StepItem
                        title={'Publique'}
                        number={1}
                        description={'Uma breve descrição do que precisa'}
                    />
                    <StepItem
                        title={'Selecione'}
                        number={2}
                        description={
                            'Escolha um projeto e negocie o valor final '
                        }
                    />
                    <StepItem
                        title={'Desenvolva'}
                        number={3}
                        description={
                            'Finalize o projeto e receba o valor na hora'
                        }
                    />
                </StepsContainer>
                <PrimaryWave
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        bottom: -48,
                        width: '100%',
                        height: 48,
                        transform: 'rotateX(180deg) rotateY(180deg)'
                    }}
                />
            </Section>
            <Section color={'#444'}></Section>
        </div>
    )
}

export default Home
