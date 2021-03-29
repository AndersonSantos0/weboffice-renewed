/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { ButtonContainer, ButtonText } from './style'

interface ButtonProps {
    children: string | React.ReactNode
    color?: 'freelancer' | 'enterprise' | string
    style?: React.CSSProperties
    textStyle?: React.CSSProperties
    onClick?: () => void
    type?: 'button' | 'reset' | 'submit'
}

const Button: React.FC<ButtonProps> = ({
    children,
    color = 'freelancer',
    style = {},
    textStyle = {},
    onClick = () => {},
    type = 'button'
}) => {
    return (
        <ButtonContainer
            type={type}
            onClick={() => onClick()}
            style={style}
            color={color}
        >
            <ButtonText style={textStyle}>{children}</ButtonText>
        </ButtonContainer>
    )
}

export default Button
