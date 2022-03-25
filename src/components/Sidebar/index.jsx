import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
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
import SidebarChild from '../SidebarChild';

function Sidebar({ isSidebarOpen, handlerSidebar }) {
  const [linkChild, setLinkChild] = useState({ subTitle: '', children: [] });
  const childRef = useRef(null);

  const handlerChild = (subTitle, children) => {
    if (linkChild && subTitle === linkChild.subTitle) {
      setTimeout(() => {
        childRef.current.style = 'transform: translateX(-120%);';
      }, 10);
      setLinkChild({ subTitle: '', children: [] });
      return;
    }

    setLinkChild({ subTitle, children });

    childRef.current.style = 'transform: translateX(100%);';
  };

  console.log(isSidebarOpen);
  return (
    <>
      <Wrapper>
        <ContentParent className={isSidebarOpen ? 'active' : ''}>
          <Content>
            <SidebarHeader>
              <button
                className='close-btn'
                type='button'
                onClick={handlerSidebar}
              >
                <IoCloseOutline />
              </button>
              <div>
                <img src={Logo} alt='log' />
              </div>
            </SidebarHeader>
            <SidebarNav>
              <ul>
                {links.map((item, index) => {
                  const { text, url, children, subTitle } = item;
                  if (children || subTitle) {
                    return (
                      <li
                        key={index}
                        onClick={() => handlerChild(subTitle, children)}
                      >
                        <NavLink
                          to={url}
                          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                          onClick={(e) => {
                            e.preventDefault();
                            handlerChild(subTitle, children);
                          }}
                        >
                          {text}
                        </NavLink>

                        {/* {children &&  <ContentChild className="sub-menu"><Content><ChildrenBuild childrens={children} /></Content></ContentChild>} */}
                      </li>
                    );
                  }
                  return (
                    <li key={index}>
                      <NavLink
                        to={url}
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        {text}
                      </NavLink>
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
        <ContentChild ref={childRef} className='active'>
          {linkChild.children.length > 0 ? (
            <SidebarChild childrens={linkChild} />
          ) : null}
        </ContentChild>
      </Wrapper>
    </>
  );
}

export default Sidebar;
