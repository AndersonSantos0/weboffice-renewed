import styled from 'styled-components'

export const SocialTabContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const SocialButton = styled.div`
    margin: 2px 8px;
    transition: 0.4s transform;
    cursor: pointer;

    :hover {
        transform: scale(1.2);
    }
`
