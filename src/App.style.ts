import styled from "styled-components";

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    background-color: red;
    height: 300px;
  }

  select {
      padding: 10px;
      margin-bottom: 10px;
  }
`;
export const Select = styled.select`
  margin-bottom: 10px;
  padding: 10px;
`;
export const Input = styled.input`
  width: 400px;
  padding: 10px 5px;
  margin-bottom: 10px;
`;

export const ButtonsArea = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  .buttonCancel {
    background-color: red;
  }
`;
export const ButtonModal = styled.button`
  padding: 10px;
  width: 200px;
  cursor: pointer;
  background-color: green;
  color: #fff;
  border: 0;
`;

export const ButtonOpenModal = styled.div`
  background-color: rgb(247, 247, 247);
  color: #000;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
`;


export const Head= styled.header`
background: linear-gradient(60deg, #ff520f, #ff8601, #ff8600);
max-width: 100%;
height: 200px;

.header-title {
  display: flex;
  margin: 0 auto;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;

  p{
    color: white;
    font-weight: 700;
    font-size: 22px;
  }
  
  button {
      background-color: #FFF;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
  }

}

`