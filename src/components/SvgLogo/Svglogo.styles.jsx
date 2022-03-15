import styled from 'styled-components';


export const SvgWrapper = styled.div`
  position: relative;
  svg {
    display: block;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
  }
  img {
    position: absolute;
    top:0;
    left:25%;
    transform:translate(-50%,-50%);
  }
  .mma-logo {
    width: 85%;
    animation: infinite shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;

  }

  @keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
`;
