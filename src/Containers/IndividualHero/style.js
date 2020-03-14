import styled from 'styled-components';

const color = () => 'color: #666;';

const IndividualHeroContainerWrapper = styled.div`
  .header {
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #999;
    padding-bottom: 5px;
    margin-bottom: 10px;

    i {
      margin-right: 20px;
      font-size: 22px;
      color: ${(props) => props.theme.primary};
      cursor: pointer;
    }

    h2 {
      ${color};
      flex: 1;
      font-size: 20px;
    }
  }

  .content {
    display: flex;

    img {
      width: 300px;
    }

    .description {
      flex: 1;
      margin-bottom: 15px;
    }

    .series {
      flex: 1;
      margin-left: 25px;

      ul {
        margin-left: 20px;
      }
    }

    h3 {
      ${color};
      margin-bottom: 5px;
    }
  }
  @media (max-width: 700px) {
    .content {
      flex-direction: column;
      img {
        margin-bottom: 15px;
      }
    }
  }
  @media (max-width: 420px) {
    .content {
      img {
        width: 100%;
      }
    }
  }
`;

export default IndividualHeroContainerWrapper;
