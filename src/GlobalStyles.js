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
::root {
  --clr-primary-1:#ECECEC;
  --clr-primary-2:#D20A0A;
  --clr-primary-3:#fff; 
  --clr-primary-4:#6D6D6D;
  --clr-primary-5:#0C0C0C;
  --clr-primary-6:#4E4E4E;
  --clr-white: #fff;
  --clr-black: #000;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
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
  background: var(--cl-primary-1);
  color: var(--cl-primary-6);
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
h1 {
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
/*
=============== 
Reviews
===============
*/

`;
