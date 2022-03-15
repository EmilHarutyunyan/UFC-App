import styled from 'styled-components';


export const Wrapper = styled.section`
  display:flex;
  align-items: center;
  svg {
    margin-right: 40px;
    font-size: 35px;
    path {
      stroke: var(--clr-primary-6)
    }
  }
`;

export const Article = styled.article``;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
`;

export const SearchLabel = styled.label`

  svg {
    font-size:18px;
    cursor: pointer;
  }
`;