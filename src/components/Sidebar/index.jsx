import React, { useState,useRef } from 'react';
import { Link } from 'react-router-dom';
// Icons
import { IoCloseOutline } from 'react-icons/io5';
// Img
import Logo from '../../assets/img/UFC.png';
import { links } from '../../utils/constant';

// Styles
import {
  Wrapper,
  Content,
  ContentParent,
  ContentChild,
  SidebarHeader,
  SidebarNav,
  SidebarFooter,
} from './Sidebar.styles';

function Sidebar({ isSidebarOpen, handlerSidebar }) {
  const [linkChild, setLinkChild] = useState([{ subTitle: '', children: [] }]);
  const childRef =  useRef(null)
  const childrenBuild = (childrens) => {
    const build = childrens[0].children.map((item, index) => {
      const { text, url, children } = item;
      return (
        <li key={index}>
          <Link to={url}>{text}</Link>
          {children && childrenBuild(children)}
        </li>
      );
    });
    return (
      <ul>
        {childrens.subTitle && <p>{childrens.subTitle }</p>}
        {build}
      </ul>
    );
  };
  const handlerChild = (subTitle, children) => {
    if (linkChild && subTitle === linkChild[0].subTitle) {
      setTimeout(() => {
        // childRef.current.style = "transform: translateX(-120%);"
      }, 300);
      setLinkChild([{ subTitle: '', children: [] }]);
      return;
    }
    
    setLinkChild([{subTitle, children}]);
    console.log(childRef.current);
    childRef.current.style = "transform: translateX(100%);"
    
  };
  console.log(isSidebarOpen);
  return (
    <>
      <Wrapper>
        <ContentParent className={isSidebarOpen ? 'parent-menu active' : ''}>
          <Content>
            <SidebarHeader>
              <button
                className='close-btn'
                type='button'
                onClick={handlerSidebar}
              >
                <IoCloseOutline />
              </button>
              <img src={Logo} alt='log' />
            </SidebarHeader>
            <SidebarNav>
              <ul>
                {links.map((item, index) => {
                  const { text, url, children, subTitle } = item;
                  if (children && subTitle) {
                    return (
                      <li
                        key={index}
                        onClick={() => handlerChild(subTitle, children)}
                      >
                        <Link
                          to={url}
                          onClick={(e) => {
                            e.preventDefault();
                            handlerChild(subTitle, children);
                          }}
                        >
                          {text}
                        </Link>

                        {/* {children &&  <ContentChild className="sub-menu"><Content><ChildrenBuild childrens={children} /></Content></ContentChild>} */}
                      </li>
                    );
                  }
                  return (
                    <li key={index}>
                      <Link to={url}>{text}</Link>
                    </li>
                  );
                })}
              </ul>
            </SidebarNav>
            <SidebarFooter>
              <p>Shop</p>
              <p>Help</p>
            </SidebarFooter>
          </Content>
        </ContentParent>
        {linkChild[0].children.length > 0 ? (
          <ContentChild ref={childRef} className='active'>
            <Content>{childrenBuild(linkChild)}</Content>
          </ContentChild>
        ):null}
      </Wrapper>
    </>
  );
}

export default Sidebar;
