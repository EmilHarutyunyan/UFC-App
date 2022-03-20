import styled from 'styled-components';


export const Wrapper = styled.section`
  display:flex;
  align-items: center;
  svg {
    margin-right: 40px;
    font-size: 35px;
    path {
      
      transition: var(--transition);
    }
    :hover {
      path {
        transition: var(--transition);
        stroke: var(--clr-primary-2);
      }
    }
    
    
  }
`;

export const Article = styled.article`
  &:nth-child(2) {
    width: 90%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
`;

export const SearchLabel = styled.label`

  input {
    width: 90%;
    background: none;
    border: none;
    border-bottom: 1px solid;
    outline: none;
    font-size: 22px;
  }
  svg {
    font-size:20px;
    cursor: pointer;
    vertical-align:middle ;
  }
`;