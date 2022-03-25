import styled from 'styled-components';

export const Child = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  ul li {
    padding-bottom: 12px;
  }
  ul li:last-child {
    padding: 0;
  }
  ul li a {
    color: var(--clr-primary-6);
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    letter-spacing: 0.22px;
    font-weight: 500;
    text-transform: uppercase;
    transition: var(--transition);
    :hover {
      color: var(--clr-primary-5);
      transition: var(--transition);
    }
    &.active {
      font-weight: bold;
      color: var(--clr-primary-5);
    }
  }
`;
export const SubTitle = styled.h3`
  color: var(--clr-primary-2);
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  letter-spacing: 0.22px;
  padding-bottom: 22px;
  text-transform: capitalize;
`;
