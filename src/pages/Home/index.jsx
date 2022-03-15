import React from 'react'
import SearchBar from '../../components/SearchBar'
// import SvgLogo from '../../components/SvgLogo'
// import U from "../../assets/img/u.png"
// import Fup from "../../assets/img/f-up.png"
// import Fdown from "../../assets/img/f-down.png"
// import C from "../../assets/img/c.png"
// import MMA from "../../assets/img/mma.png"
import SvgLogo from "../../components/SvgLogo"
// Styles
import {Wrapper, Content,Article,Info, ImgWrapper} from "./Home.styles"
// Img
import UfcLong from "../../assets/img/ufc-long.png"
function Home() {
  return (
    <>
    <SearchBar/>

    <Wrapper>
      <Content>
        <Article>
        <SvgLogo/>
        </Article>
        <Article>
          <ImgWrapper>
            <img src={UfcLong} alt="" />
          </ImgWrapper>
          <Info>American mixed martial arts organization</Info>
        </Article>
      </Content>
    </Wrapper>
    {/* <div>Home</div> */}

    </>
  )
}

export default Home