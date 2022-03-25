import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/*
=============== 
Fonts
===============
*/
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
/* ================= CSS RESET STYLE ================= */
*{padding:0;margin:0;border:0}*,:after,:before{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}:active,:focus{outline:0}a:active,a:focus{outline:0}aside,footer,header,nav{display:block}body,html{height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%}button,input,textarea{font-family:inherit}input::-ms-clear{display:none}button{cursor:pointer}button::-moz-focus-inner{padding:0;border:0}a,a:visited{text-decoration:none}a:hover{text-decoration:none}ul li{list-style:none}img{vertical-align:top}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;box-sizing:border-box}

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
  --clr-primary-7:#F5F5F5;
  --clr-white: #fff;
  --clr-black: #000;
  --transition: all 0.3s ease;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background: var(--clr-primary-1);
  color: var(--clr-primary-4);
  line-height: 25px;
  font-size: 16px;
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
Scroll
===============
*/
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: rgb(255, 255, 255);
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 40%) 0px 0px 2px 0px inset;
    
    background-color: var(--clr-primary-2);
}
::-webkit-scrollbar-track {
    box-shadow: rgb(0 0 0 / 30%) 0px 0px 6px inset;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
}
/*
===============
Reviews
===============
*/
.main-container {
  width:100%;
  max-width: 1750px;
  padding: 0px 20px;
  margin:0 auto;
}


`;
