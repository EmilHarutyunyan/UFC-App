import styled from "styled-components";

export const Wrapper = styled.aside`
  /* background-color:var(--clr-primary-7);
  width: 450px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index:1;
  overflow: auto;
  box-shadow: 12px 0px 20px 0px #999999;
  transform: translateX(-120%);
  transition:var(--transition);
  &.active {
    transform: translateX(0%);
    transition:var(--transition);
  } */
`;
export const ContentParent = styled.div`
  background-color:var(--clr-primary-7);
  width: 450px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index:3;
  /* overflow: auto; */
  box-shadow: 0px 1px 44px #00000078;
  transform: translateX(-120%);
  transition:var(--transition);
  &.active {
    transform: translateX(0%);
    transition:var(--transition);
  }
`;
export const ContentChild = styled.div`
  background-color:var(--clr-primary-7);
  opacity: 0.96;
  width: 450px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index:1;
  overflow: auto;
  transform: translateX(-120%);
  transition:var(--transition);
  /* animation: identifier 0.3s ease-in forwards;

  &.active {
    transform: translateX(100%);
    transition:var(--transition);
  }
  @keyframes identifier {
    0% {
      transform: translateX(-120%);
    }
    100% {
      transform: translateX(100%);
    }
  } */
`;

export const Content = styled.div`
  display: flex;
  flex-direction:column;
  padding:40px 50px;
  height:100%;

  ul li {
      padding: 12px 0;
    }
    ul li a {
      color: var(--clr-primary-4);
      font-weight:500;
      font-size: 18px;
      text-transform:uppercase;
      transition:var(--transition);
      :hover {
        color:var(--clr-primary-5);
        transition:var(--transition);
      }
      &.active {
        color: var(--clr-primary-5);
      }
    }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 50px;
  .close-btn {
    background:none;
    & svg {
      font-size: 50px;
      stroke: var(--clr-primary-6);
      transition:var(--transition);
      :hover {
        stroke:var(--clr-primary-2);
        transition:var(--transition);
      }
    }
  }
  

`;
export const SidebarNav = styled.nav`
    width: 100%;
    margin: 0 auto;
    max-width: 150px;
    padding-top: 140px;
    flex-grow:1;
`;
export const SidebarFooter = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top: 50px;
  text-transform:uppercase;
`;
