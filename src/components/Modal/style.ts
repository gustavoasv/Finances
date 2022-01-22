import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  height: 100vh;
  background-color: rgba(238, 238, 238, 0.482);
  
`;
export const ModalArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  top: 20%;
  width: 560px;
  max-width: 95vw;
  height: 340px;
  background-color: white;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.02);
`;

export const Form = styled.input`
  margin: 10px;
  width: 90%;
  padding: 10px;
`;

export const Select = styled.select`
  padding: 10px;
`;

export const ButtonArea = styled.div`
 display: flex;
 justify-content: space-between;
 width: 90%;
 padding: 10px;
 height: 80px;

 .btnCancel{
     background-color: red;
 }
`

export const Button = styled.button`
 background-color: green;
 cursor: pointer;
 width: 200px;
 color: #FFF;
 border: 0;

 &:hover {
    background-color: rgba(0, 0, 0, 0.321);
 }
`
export const Options = styled.option``