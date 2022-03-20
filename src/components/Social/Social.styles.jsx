import styled from "styled-components"


export const Wrapper = styled.div`
  text-align: right;

  svg {
    
    font-size: 30px;
    cursor: pointer;
    path{transition: var(--transition);}
    :hover {
      path {
        transition: var(--transition);
        fill:var(--clr-primary-2)
      }
    }
  }
`;