/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'

interface PrimaryWaveProps {
    style?: {}
    color?: string
}

const PrimaryWave: React.FC<PrimaryWaveProps> = ({
    style = {},
    color = '#333'
}) => {
    return (
        <svg preserveAspectRatio="none" viewBox="0 0 500 150" style={style}>
            <path
                fill={color}
                d="M0 49.98c149.99 100.02 349.2-99.96 500 0V150H0z"
            ></path>
        </svg>
    )
}

export default PrimaryWave
