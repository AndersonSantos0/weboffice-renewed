import styled from 'styled-components'

export const SignContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    max-width: 33vw;
    min-width: 400px;
    background-color: var(--default-gray);
    padding: 0 72px;
    box-sizing: border-box;
`

export const SignSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    > form {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`

export const SignTitle = styled.h1`
    font-family: Comfortaa;
    font-weight: 100;
    font-size: 52px;
    color: #fff;
    margin: 24px 0;
`

export const SignOrText = styled.p`
    color: var(--default-white);
    font-family: Comfortaa;
    font-size: 14px;
    margin: 16px 0;
`

export const ForgotPasswordText = styled.a`
    color: var(--default-white);
    font-size: 12px;
    align-self: flex-end;
    margin: 16px 8px;
    text-decoration: underline;
    font-family: Comfortaa;
    cursor: pointer;
`

export const SignUpText = styled.a`
    color: var(--default-white);
    text-align: center;
    font-size: 12px;
    margin: 24px 0;
    text-decoration: underline;
    font-family: Comfortaa;
    cursor: pointer;
`

export const SignPortifolio = styled.div`
    flex: 2;
    overflow: hidden;
    position: relative;
    background-color: #fff;
    background-image: url(${require('../../assets/images/SignInPortifolio.png')});
    background-size: cover;
    background-position: center;
    height: 100vh;

    ::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
        background: var(--primary-gradient);
        opacity: 0.4;
    }
`

export const SignInPortifolioTitle = styled.h1`
    position: relative;
    font-family: Comfortaa;
    color: var(--default-white);
    font-size: 48px;
    font-weight: 100;
    margin: 36px 48px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
`

export const Logo = styled.div`
    width: 64px;
    height: 64px;
    position: absolute;
    top: 28px;
    right: 32px;

    img {
        width: 100%;
        height: 100%;
    }
`
