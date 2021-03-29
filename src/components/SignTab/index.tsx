import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SignTabButton, SignTabContainer } from './style'

interface SignTabProps {
    style?: React.CSSProperties
}

const SignTab: React.FC<SignTabProps> = ({ style = {} }) => {
    return (
        <SignTabContainer style={style}>
            <SignTabButton>
                <FaFacebookF size={18} color={'var(--default-white)'} />
            </SignTabButton>
            <SignTabButton>
                <FaLinkedinIn size={18} color={'var(--default-white)'} />
            </SignTabButton>
            <SignTabButton>
                <FaGithub size={18} color={'var(--default-white)'} />
            </SignTabButton>
        </SignTabContainer>
    )
}

export default SignTab
