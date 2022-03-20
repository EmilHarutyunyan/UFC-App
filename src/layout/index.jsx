import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'

// Components
import Sidebar from '../components/Sidebar'
import Searchbar from '../components/Searchbar'
import Social from '../components/Social'

// Styles
import {Header,Main,Wrapper,Footer} from "./Layout.styles"


function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)


  const handlerSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <Wrapper>
    <Header>
      <Sidebar isSidebarOpen={isSidebarOpen} handlerSidebar={handlerSidebar}/>
      <Searchbar handlerSidebar={handlerSidebar}/>
    </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <Social/>
      </Footer>
    </Wrapper>
    
  )
}


export default Layout