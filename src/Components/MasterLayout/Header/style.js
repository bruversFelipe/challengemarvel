import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: ${(props) => props.theme.primary};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 64px;
  box-shadow: ${(props) => props.theme.shadow};

  .logo {
    background: url('data:image/png;base64,${(props) => props.theme.logo}') no-repeat;
    width: 144px;
    height: 60px;
  }
`;

export default HeaderWrapper;
