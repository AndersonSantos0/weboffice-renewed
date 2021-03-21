import styled from 'styled-components'

export const Portfolio = styled.div`
    position: relative;
    height: 70vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-gradient);
`

interface SectionProps {
    color?: string
}

export const Section = styled.div<SectionProps>`
    position: relative;
    width: 100%;
    height: 30vh;
    background-color: ${props =>
        props.color ? props.color : 'var(--bg-gray)'};
`
