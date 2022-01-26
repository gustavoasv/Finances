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

  @media (max-width: 768px) {
    max-width: 80vw;
    height: 450px;
    margin: 0 auto;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 90%;
  @media (max-width: 500px) {
    width: 100vw;
  }
`;

export const CardContents = styled.div`
  width: 18rem;
  height: 8rem;
  padding: 10px 0 0 10px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  transition: 0.5s;
  box-shadow: 5px 5px 15px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-3px);
    -webkit-box-shadow: 1px 1px 1px 416px rgba(0, 0, 0, 0.304);
    box-shadow: 5px 5px 15px 8px rgba(0, 0, 0, 0.05);
    transition: 0.2s;
  }

  @media (min-width: 329px e max-width: 768px) {
    ma-width: 90vw;
  }
`;

export const Texts = styled.p`
  padding: 0 0 0 10px;
  font-size: 17px;
`;

export const Valor = styled.p`
  width: 250px;
  padding: 0 0 0 10px;
  font-size: 27px;
  font-weight: 700;
`;
