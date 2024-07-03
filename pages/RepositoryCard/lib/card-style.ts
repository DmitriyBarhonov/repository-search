import styled from "styled-components";

export const RepositoryCardStyle = {
  ArticleContainer: styled.div`
    padding: 50px 100px;
    background-color: rgba(50, 50, 50, 0.8);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    max-width: 900px;
    margin: 0 auto;
  `,
  CardTitle: styled.h1`
    margin-bottom: 20px;
    & a {
      font-size: 30px;
      color: #25b084;
      &:visited {
        color: #a6c628;
      }
      &:hover {
        color: #ffff;
      }
    }
  `,
  //   DRY ))
  CardInfo: styled.div`
    justify-content: space-around;
    display: flex;
    margin-bottom: 50px;
  `,
  CardInfoText: styled.div`
    max-width: 500px;
    text-align: start;
  `,
  Star: styled.div`
    margin-bottom: 25px;
  `,
  Commit: styled.div`
    margin-bottom: 25px;
  `,
  Author: styled.div`
    margin-bottom: 25px;
  `,
  Description: styled.p``,

  Languages: styled.div`
    margin-bottom: 70px;
    margin: 0 auto;
  `,
  LanguagesList: styled.ul`
    margin: 20px 0;
    display: flex;
    & li {
      margin-right: 6px;
    }
  `,
  Img: styled.div`
    & img {
      max-width: 250px;
      height: auto;
    }
  `,
};
