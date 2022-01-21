import styled from "styled-components";

export const Cards = styled.div`
  position: relative;
  bottom: 90px;
  display: flex;
  max-width: 950px;
  align-items: center;
  justify-content: space-around;
  height: 180px;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 90vw;
    height: 500px;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 18rem;
  height: 8rem;
  padding: 10px 0 0 10px;
  background-color: white;
  border-radius: 10px;

  &:hover {
    transform: translateY(-3px);
    -webkit-box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.04);
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.02);
    transition: 0.2s;
  }

  p:nth-child(2) {
    font-size: 26px;
    font-weight: 600;
  }
`;
