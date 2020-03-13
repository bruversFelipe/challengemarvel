import styled from 'styled-components';

const EasterEggWrapper = styled.div`
  .manopla {
    position: fixed;
    bottom: 35px;
    right: 35px;

    img {
      width: 100px;
      cursor: pointer;
    }

    :hover {
      animation: swishManopla 1s linear;
    }
  }
  .overlay {
    display: ${(props) => (props.overlay ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    animation: loadOverlay 5s linear;
  }

  @keyframes loadOverlay {
    0% {
      background: rgba(0, 0, 0, 0.2);
    }
    50% {
      background: rgba(0, 0, 0, 1);
    }
    100% {
      background: rgba(0, 0, 0, 1);
    }
  }

  @keyframes swishManopla {
    0% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export default EasterEggWrapper;
