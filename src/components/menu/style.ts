import styled from "styled-components"

export const MenuContainer = styled.nav`
    display: flex;
    width: 100%;
    height: 60px;
    font-family: Comfortaa;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    color: var(--default-white);
`

export const MenuSubContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
`

export const MenuListContainer = styled.div`

`

export const MenuList = styled.ul`
    list-style: none;
    display: flex;
    height: 100%;
    padding-left: 8px;
`

interface MenuListItemProps {
    active?: boolean
}

export const MenuListItem = styled.li<MenuListItemProps>`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    :hover::before{
        width: 36px;
    }

    ::before{
        content: '';
        position: absolute;
        width: ${props => props.active ? '36px' : 0};
        height: 1px;
        background-color: var(--default-white);
        bottom: 26%;
        left: 16px;
        transition: .3s;
    }

    > a{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        height: 100%;
        font-size: 16px;
    }
`