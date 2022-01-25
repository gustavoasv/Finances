import styled from "styled-components";

export const TabCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  max-width: 950px;
  display: flex;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.02);

  div {
    width: 230px;

    &:nth-child(2) {
      text-align: center;
    }
  }
`;
