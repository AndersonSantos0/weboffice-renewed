import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/button'
import Input from '../components/input'
import SignTab from '../components/SignTab'
import {
    ForgotPasswordText,
    Logo,
    SignContainer,
    SignInPortifolioTitle,
    SignOrText,
    SignPortifolio,
    SignSection,
    SignTitle,
    SignUpText
} from '../styles/pages/signin'
import SocialTab from '../components/socialTab'

const SignIn: React.FC = () => {
    return (
        <div className="screen">
            <Head>
                <title>WebOffice - Entrar</title>
            </Head>
            <SignContainer>
                <SignSection>
                    <SignTitle>WebOffice</SignTitle>
                    <SignTab />
                    <SignOrText>Ou use seu email</SignOrText>
                    <form>
                        <Input
                            style={{ width: '100%', margin: '12px 0' }}
                            placeholder={'Email'}
                            type={'email'}
                        />
                        <Input
                            style={{ width: '100%', marginTop: 12 }}
                            placeholder={'Senha'}
                            type={'password'}
                        />
                        <ForgotPasswordText>
                            Esqueci minha senha
                        </ForgotPasswordText>
                        <Button onClick={() => console.log('teste')}>
                            Entrar
                        </Button>
                        <Link href={'/SignIn'}>
                            <SignUpText>Não possuo uma conta</SignUpText>
                        </Link>
                    </form>
                </SignSection>
            </SignContainer>
            <SignPortifolio>
                <SignInPortifolioTitle>
                    Coloque suas <br /> ideias em <br /> prática
                </SignInPortifolioTitle>
                <Logo>
                    <Image width={120} height={120} src={'/images/logo.png'} />
                </Logo>
                <SocialTab
                    style={{ position: 'absolute', right: 32, bottom: 32 }}
                />
            </SignPortifolio>
        </div>
    )
}

export default SignIn
