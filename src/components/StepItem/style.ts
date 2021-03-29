import styled from 'styled-components'

export const StepItemContainer = styled.div`
    position: relative;
    padding: 0 48px;
    max-width: 350px;

    > hr {
        position: relative;
        z-index: 1;
        width: 50%;
        border: none;
        border-top: 1px solid var(--default-white);
    }
`

export const StepItemNumber = styled.h2`
    position: absolute;
    font-family: PoppinsB;
    font-weight: bold;
    color: var(--default-lightgray);
    user-select: none;
    font-size: 98px;
    z-index: 0;
    left: 8px;
    top: 0;
`

export const StepItemTitle = styled.h1`
    font-family: Comfortaa;
    color: var(--primary-color);
    position: relative;
    z-index: 1;
    font-weight: 100;
    font-size: 24px;
    padding-bottom: 8px;
`

export const StepItemDescription = styled.p`
    font-family: PoppinsL;
    color: var(--default-white);
    font-size: 18px;
    position: relative;
    z-index: 1;
    padding-bottom: 32px;
`
