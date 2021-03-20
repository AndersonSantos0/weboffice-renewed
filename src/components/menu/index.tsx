import Link from 'next/link'
import MenuConfigs from '../menuConfigs'
import { MenuContainer, MenuList, MenuListContainer, MenuListItem, MenuSubContainer } from './style'

const Menu = () => {
    return (
        <MenuContainer>
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
                                <a>Empresas</a>
                            </Link>
                        </MenuListItem>
                        <MenuListItem>
                            <Link href="/">
                                <a>Freelancers</a>
                            </Link>
                        </MenuListItem>
                    </MenuList>
                </MenuListContainer>
                <MenuConfigs />
            </MenuSubContainer>
        </MenuContainer>
    )
}

export default Menu