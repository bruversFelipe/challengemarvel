import styled from 'styled-components';

const LoadingWrapper = styled.div`
  background: rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 8;
  display: flex;
  justify-content: center;
  align-items: center;

  .load {
    width: 50px;
    height: 50px;
    animation: loadingThor 1s linear infinite;
  }

  @keyframes loadingThor {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingWrapper;
