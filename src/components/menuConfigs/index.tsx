import React, { useState } from 'react'
import {
    MenuConfigsContainer,
    MenuProfileContainer,
    MenuProfileView,
    MenuSearchContainer
} from './style'
import Image from 'next/image'
import MenuSearch from '../menuSearch'

interface MenuConfigsProps {
    darkIcon?: boolean
}

const MenuConfigs: React.FC<MenuConfigsProps> = ({ darkIcon = false }) => {
    const [activeSearchView, setActiveSearchView] = useState(false)

    return (
        <MenuConfigsContainer>
            <MenuSearchContainer>
                <MenuSearch
                    darkIcon={darkIcon}
                    active={activeSearchView}
                    setActive={e => setActiveSearchView(e)}
                />
            </MenuSearchContainer>
            <div></div>
            <MenuProfileContainer>
                <MenuProfileView>
                    <Image
                        src={'/images/profile.jpg'}
                        width={64}
                        height={64}
                        objectFit={'cover'}
                    />
                </MenuProfileView>
            </MenuProfileContainer>
        </MenuConfigsContainer>
    )
}

export default MenuConfigs
