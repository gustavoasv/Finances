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
