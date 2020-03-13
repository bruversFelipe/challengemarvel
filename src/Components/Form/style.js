import styled from 'styled-components';

const FormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
    color: #444;
    font-size: 14px;

    span {
      color: #aaa;
      font-size: 12px;
    }
  }
  .required {
    border: 1px solid #ff0000;
  }
  .message {
    color: #ff0000;
    margin-bottom: 10px;
    margin-top: -5px;
    font-size: 14px;
  }
`;

export default FormItemWrapper;
