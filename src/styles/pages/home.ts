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
    horizontal?: boolean
}

export const Section = styled.div<SectionProps>`
    position: relative;
    display: flex;
    flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
    width: 100%;
    height: 30vh;
    background-color: ${props =>
        props.color ? props.color : 'var(--bg-gray)'};
`

export const StepsContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    max-width: 80vw;
`
