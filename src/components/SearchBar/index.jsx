import React from 'react';
// Img
import Logo from "../../assets/img/UFC.png"
import {BiSearch} from "react-icons/bi"
import {HiOutlineMenuAlt2} from "react-icons/hi"
// Styles
import {Wrapper,Content,Article,SearchLabel} from "./Searchbar.styles"
function SearchBar({handlerSidebar}) {
  return (
    <Wrapper className='main-container'>
      <button type='button' onClick={handlerSidebar}>
        <HiOutlineMenuAlt2/>
      </button>
      <Content>
        <Article>
          <img src={Logo} alt="logo" />
        </Article>
        <Article>
          <form action="">
            <div>
            <SearchLabel>
              <input type="text" />
              <BiSearch/>
            </SearchLabel>
            </div>
          </form>
        </Article>
      </Content>
    </Wrapper>
  )
}

export default SearchBar