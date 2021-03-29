import React from 'react'
import {
    StepItemContainer,
    StepItemDescription,
    StepItemNumber,
    StepItemTitle
} from './style'

interface StepItemProps {
    title?: string
    number?: number
    description?: string
}

const StepItem: React.FC<StepItemProps> = ({
    title = 'title',
    number = 0,
    description = 'description'
}) => {
    return (
        <StepItemContainer>
            <StepItemTitle>{title}</StepItemTitle>
            <StepItemNumber>{number}</StepItemNumber>
            <StepItemDescription>{description}</StepItemDescription>
            <hr />
        </StepItemContainer>
    )
}

export default StepItem
