import styled from 'styled-components'

export const SignTabContainer = styled.div`
    display: flex;
    padding: 16px 0;
`

export const SignTabButton = styled.div`
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 2px var(--default-white);
    width: 48px;
    height: 48px;
    margin: 0 6px;
    cursor: pointer;
    transition: 0.2s;

    :hover {
        transform: scale(1.1);
        margin: 0 12px;
    }

    :active {
        transform: scale(0.95);
    }
`
