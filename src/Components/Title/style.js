import styled from 'styled-components';

const TitleWrapper = styled.h1`
  font-weight: 700;
  color: #999;
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 15px;

  span {
    white-space: nowrap;
  }

  :before {
    content: '';
    width: 5px;
    height: 40px;
    background-color: #ccc;
    display: flex;
    margin: 0 15px 0 0;
  }

  :after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #ccc;
    display: flex;
    margin: 0 0 0 15px;
  }
`;

export default TitleWrapper;
