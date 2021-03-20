import Link from 'next/link'
import { useEffect, useState } from 'react'
import MenuConfigs from '../menuConfigs'
import { MenuContainer, MenuList, MenuListContainer, MenuListItem, MenuSubContainer } from './style'

const Menu = () => {

    const [darkMenu, setDarkMenu] = useState(false)

    useEffect(() => {
        function onScroll() {
            if(window.pageYOffset > 200){
                setDarkMenu(true)
            }else{
                setDarkMenu(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    })

    return (
        <MenuContainer darkMenu={darkMenu}>
            <MenuSubContainer>
                <MenuListContainer>
                    <MenuList>
                        <MenuListItem active>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </MenuListItem>
                        <MenuListItem>
                            <Link href="/">
                                <a>Projetos</a>
                            </Link>
                        </MenuListItem>
                        <MenuListItem>
                            <Link href="/">
                                <a>Freelancers</a>
                            </Link>
                        </MenuListItem>
                        <MenuListItem>
                            <Link href="/">
                                <a>Empresas</a>
                            </Link>
                        </MenuListItem>
                    </MenuList>
                </MenuListContainer>
                <MenuConfigs darkIcon={darkMenu} />
            </MenuSubContainer>
        </MenuContainer>
    )
}

export default Menu