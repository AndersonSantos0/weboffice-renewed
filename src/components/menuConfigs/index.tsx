import { MenuConfigsContainer, MenuProfileContainer, MenuProfileView, MenuSearchContainer } from './style'
import Image from 'next/image'
import MenuSearch from '../menuSearch'
import { useState } from 'react'

const MenuConfigs = () => {

    const [activeSearchView, setActiveSearchView] = useState(false)

    return (
        <MenuConfigsContainer>
            <MenuSearchContainer>
                <MenuSearch active={activeSearchView} setActive={(e)=>setActiveSearchView(e)} />
            </MenuSearchContainer>
            <div>

            </div>
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