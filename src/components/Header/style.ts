import styled from "styled-components";

export const bgHeader = styled.header`
  background: linear-gradient(60deg, #ff520f, #ff8601, #ff8600);
  max-width: 100%;
  height: 200px;

  .header-title {
    display: flex;
    margin: 0 auto;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;

    p {
      color: white;
      font-size: 19px;
    }

    div{
      background-color: rgb(247, 247, 247);
      color: #FFF;
      padding: 10px 15px;
      border-radius: 5px;
    }
  }
`;
