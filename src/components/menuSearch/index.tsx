import { useEffect, useState } from "react"
import { FiSearch } from "react-icons/fi"
import { MenuSearchLimit, MenuSearchView, SearchButton, SearchView } from "./style"

interface MenuSearchProps {
    active?: boolean;
    setActive?: (active) => void;
}

const MenuSearch: React.FC<MenuSearchProps> = ({active = false, setActive = () => {}}) => {

    const [searchValue, setSearchValue] = useState("")

    useEffect(()=>{
        if(active)document.getElementById('search-input').focus()
    },[active])

    return (
        <MenuSearchLimit>
            <MenuSearchView active={active}>
                <SearchView>
                    <input id={"search-input"} placeholder={"Pesquisar"} onBlur={()=>searchValue.length == 0 && setActive(false)} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
                    <SearchButton>
                        <FiSearch size={18} color={"var(--secondary-color)"} />
                    </SearchButton>
                </SearchView>
            </MenuSearchView>
            <SearchButton onClick={()=>setActive(true)} style={{position: 'absolute', right: 0, top: 0}}>
                <FiSearch size={18} color={"var(--default-white)"} />
            </SearchButton>
        </MenuSearchLimit>
    )
}

export default MenuSearch