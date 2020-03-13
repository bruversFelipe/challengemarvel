import styled, { css } from 'styled-components';

const animationButton = () => 'animation: animationButton 1s linear;';

const ButtonWrapper = styled.button`
  ${({ animation, typecolor, theme: { shadow, buttons } }) => css`
    background: ${buttons[typecolor].background};
    border: ${buttons[typecolor].border};
    color: ${buttons[typecolor].color};
    font-size: 14px;
    font-weight: 600;
    padding: 6px 10px;
    border-radius: 3px;
    box-shadow: ${shadow};
    cursor: pointer;

    :focus {
      outline: none;
    }
    :hover {
      opacity: 0.8;
      ${animation && animationButton}
    }

    @keyframes animationButton {
      0% {
        transform: rotate(2deg);
      }
      50% {
        transform: rotate(-2deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  `}
`;

export default ButtonWrapper;
