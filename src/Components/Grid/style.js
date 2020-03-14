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

  @media (max-width: 1050px) {
    .col {
      width: 46%;
    }
  }
  @media (max-width: 750px) {
    .col {
      width: 100%;
    }
  }
`;

export default RowWrapper;
