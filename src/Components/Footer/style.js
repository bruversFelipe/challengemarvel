import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;

  button + button {
    margin-left: 10px;
  }
`;

export default FooterWrapper;
