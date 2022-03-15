import React from 'react';
// Img
import Logo from "../../assets/img/UFC.png"
import {BiSearch} from "react-icons/bi"
import {HiOutlineMenuAlt2} from "react-icons/hi"
// Styles
import {Wrapper,Content,Article,SearchLabel} from "./searchbar.styles"
function SearchBar() {
  return (
    <Wrapper>
      <button type='submit'>
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