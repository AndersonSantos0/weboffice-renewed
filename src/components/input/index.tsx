import React from 'react'
import { InputContainer } from './style'

interface InputProps {
    type: 'text' | 'password' | 'email' | 'button'
    style?: React.CSSProperties
    placeholder?: string
}

const Input: React.FC<InputProps> = ({
    type = 'text',
    placeholder,
    style = {}
}) => {
    if (type === 'button')
        return (
            <InputContainer style={style}>
                <input placeholder={placeholder} type={'password'} />
            </InputContainer>
        )

    if (type === 'password')
        return (
            <InputContainer style={style}>
                <input placeholder={placeholder} type={'password'} />
            </InputContainer>
        )

    return (
        <InputContainer style={style}>
            <input placeholder={placeholder} />
        </InputContainer>
    )
}

export default Input
