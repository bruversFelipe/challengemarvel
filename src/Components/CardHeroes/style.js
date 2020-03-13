import styled from 'styled-components';

const CardHeroesWrapper = styled.div`
  flex: 1;
  padding: 10px;
  background: url(${(props) => props.url}) no-repeat center;
  display: flex;
  justify-content: center;
  align-items: center;

  .edit {
    display: none;
  }

  :hover {
    opacity: 0.8;

    .edit {
      display: block;
      position: absolute;
      color: #fff;
      font-size: 40px;
      cursor: pointer;
    }
  }

  .card-hero {
    width: 250px;
    padding: 10px;
    background: #fff;

    img {
      width: 100%;
      height: 250px;
    }

    .hero {
      h2 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
      }

      .description {
        height: 30px;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
      }
    }
    .details {
      margin-top: 5px;
      display: flex;
      justify-content: flex-end;

      a {
        color: ${(props) => props.theme.primary};
        font-weight: 600;
        font-size: 14px;
      }
    }
  }
`;

export default CardHeroesWrapper;
