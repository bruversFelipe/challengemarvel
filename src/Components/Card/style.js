import styled from 'styled-components';

const CardWrapper = styled.div`
  background: #fff;
  padding: 20px;
  border: none;
  box-shadow: ${(props) => props.theme.shadow};
  position: relative;
`;

export default CardWrapper;
