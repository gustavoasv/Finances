import styled from "styled-components";

export const TabCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  text-align: center;
  max-width: 950px;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.02);

  div {
    text-align: center;
    width: 150px;
  }
`;

export const Bar = styled.span<{ color: string }>`
  background-color: ${(props) => (props.color == "Entrada" ? "green" : "red")};
  position: relative;
  left: -20px;
  width: 8px;
}`;
