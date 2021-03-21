import styled from 'styled-components'

export const MenuSearchLimit = styled.div`
    position: relative;
    min-width: 32px;
`

interface MenuSearchViewProps {
    active?: boolean
}

export const MenuSearchView = styled.div<MenuSearchViewProps>`
    height: 32px;
    width: ${props => (props.active ? '200px' : 0)};
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    z-index: 2;
    transition: 0.4s;
    float: right;
`

export const SearchView = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    background-color: var(--default-white);
    overflow: hidden;
    width: 200px;

    > input {
        flex: 1;
        outline: none;
        border: none;
        height: 32px;
        font-family: Comfortaa;
        color: var(--bg-gray);
        padding-left: 8px;
    }
`

export const SearchButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: 0.4s;

    > svg {
        transition: 0.4s;
    }

    :hover {
        transform: scale(1.2);
    }

    :active {
        transform: scale(0.8);
    }
`
