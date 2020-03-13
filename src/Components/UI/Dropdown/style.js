import styled from 'styled-components';

const DropdownWrapper = styled.div`
  position: relative;
  z-index: 1;

  .title-drop {
    color: #fff;
    font-size: 18px;
  }

  :hover {
    .items-drop {
      display: block;
    }
  }

  .items-drop {
    display: none;

    margin-top: 10px;
    position: absolute;
    left: -120px;

    :after {
      content: '';
      border-bottom: solid 15px #fff;
      border-left: solid 15px transparent;
      border-right: solid 15px transparent;
      position: absolute;
      top: -10px;
      right: 10px;
    }

    li {
      background: #fff;
      list-style: none;
      padding: 10px;
      border-bottom: 1px solid #ddd;
      cursor: pointer;
      white-space: nowrap;

      :hover {
        background: ${(props) => props.theme.primary};
        color: #fff;
      }

      :first-child {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
      }

      :last-child {
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
      }
    }
  }
`;

export default DropdownWrapper;
