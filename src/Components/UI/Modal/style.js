import styled from 'styled-components';

const configTitle = () => `
  line-height: 18px;
  font-size: 18px;
`;

const getFade = () => `
    animation: getFade 1s linear;

    @keyframes getFade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const getSwipe = () => `
    animation: getSwipe 1s linear;

    @keyframes getSwipe {
        0% {
            margin-top: 50px;
        }
        100% {
            margin-top: 0px;
        }
    }
`;

const ModalWrapper = styled.div`
  background: rgba(255, 255, 255, 0.7);
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  ${(props) => props.visible && getFade()}

  .modal {
    background: #fff;
    width: ${(props) => `${props.width}px`};
    border-radius: 3px;
    box-shadow: ${(props) => props.theme.shadow};
    ${(props) => props.visible && getSwipe()}

    .title {
      padding: 15px;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #444;

      h2 {
        ${configTitle};
        font-weight: 400;
        margin-bottom: 0;
      }

      i {
        ${configTitle};
        cursor: pointer;
      }
    }
    .body {
      padding: 25px 15px;
    }
  }
`;

export default ModalWrapper;
