import styled from 'styled-components';
import logo from './logo';

const HeaderWrapper = styled.div`
  background: ${(props) => props.theme.primary};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 64px;
  box-shadow: ${(props) => props.theme.shadow};

  .logo {
    background: url('data:image/png;base64,${logo}') no-repeat;
    position: relative;

    width: 144px;
    height: 60px;
    .person {
      width: 40px;
      height: 60px;
      position: absolute;
      right: 0;
      background: url('data:image/png;base64,${(props) => props.theme.person}') no-repeat;
    }
  }
`;

export default HeaderWrapper;
