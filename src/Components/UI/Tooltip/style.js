import styled from 'styled-components';

const Background = () => `
  background: rgba(0, 0, 0, 0.6);
`;

const TooltipWrapper = styled.div`
  position: relative;
  .title {
    display: none;
  }
  :hover {
    .title {
      left: -15px;
      top: -55px;
      position: absolute;
      display: flex;
      justify-content: center;
      color: #fff;
      padding: 10px;
      border-radius: 5px;
      font-size: 14px;
      ${Background}

      :after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        clip-path: polygon(50% 100%, 0 60%, 100% 60%);
        bottom: -10px;
        ${Background}
      }
    }
  }
`;

export default TooltipWrapper;
