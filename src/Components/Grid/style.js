import styled from 'styled-components';

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .col {
    display: flex;
    width: 30%;
    margin: 0 15px 25px 10px;

    &:nth-child(3n) {
      margin-left: 0;
    }
  }
`;

export default RowWrapper;
