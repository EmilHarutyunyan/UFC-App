import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/*
=============== 
Fonts
===============
*/
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap');

/*
=============== 
Variables
===============
*/
:root {
  --clr-primary-1:#ECECEC;
  --clr-primary-2:#D20A0A;
  --clr-primary-3:#fff; 
  --clr-primary-4:#6D6D6D;
  --clr-primary-5:#0C0C0C;
  --clr-primary-6:#4E4E4E;
  --clr-white: #fff;
  --clr-black: #000;
  --transition: all 0.3s linear;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background: var(--clr-primary-1);
  color: var(--clr-primary-6);
  line-height: 25px;
  font-size: 16px;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
button {
  border: none;
  background-color: none;
  cursor: pointer;
}
h1,
h2,
h3,
h4 {
  text-transform: capitalize;
}
/*h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-primary-4);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
*/
/*
=============== 
Reviews
===============
*/
.main-container {
  max-width: 1750px;
  padding: 0px 20px;
  margin:0 auto;
}
main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
}
`;
