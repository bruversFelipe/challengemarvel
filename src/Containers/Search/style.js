import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 8px;
  input {
    flex: 1;
    margin-right: 10px;
  }

  @media (max-width: 410px) {
    input {
      width: 100px;
    }
  }
  @media (max-width: 335px) {
    padding: 20px 0;
    flex-direction: column;
    input {
      margin: 0 0 15px 0;
    }
    input, button {
      width: 100%;
    }
  }
`;

export default SearchWrapper;
