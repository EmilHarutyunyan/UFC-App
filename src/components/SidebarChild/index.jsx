import React from 'react'
import {Link} from "react-router-dom"
// Styles
import { Child, SubTitle } from './SidebarChild.styles';
function SidebarChild({childrens}) {
  const childrenBuild = (childrens) => {
    const build = childrens.children.map((item, index) => {
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
        {childrens.subTitle && <SubTitle>{childrens.subTitle}</SubTitle>}
        {build}
        </ul>
    );
    };
  return (
    <Child>{childrenBuild(childrens)}</Child>
  )
}

export default SidebarChild