import styled from 'styled-components'

interface ButtonProps {
    color: 'freelancer' | 'enterprise' | string
}

export const ButtonContainer = styled.button<ButtonProps>`
    background-color: ${props =>
        props.color === 'freelancer'
            ? 'var(--secondary-color)'
            : props.color === 'enterprise'
            ? 'var(--secondary-enterprise-color)'
            : props.color};
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.4s;

    :active {
        transform: scale(0.95);
    }
`

export const ButtonText = styled.p`
    font-family: Comfortaa;
    color: #fff;
    padding: 16px;
`
