import { useState } from "react";

import * as C from "./style";
export const Modal = () => {
  return (
    <>
      <C.Modal>
        <C.ModalArea>
          <h3>ADICIONAR</h3>
          <C.Select name="categoria">
            <C.Options selected disabled>
              Selecione a categoria
            </C.Options>
            <C.Options>Entrada</C.Options>
            <C.Options>Saída</C.Options>
          </C.Select>
          <C.Form
            placeholder="Valor separado por ponto e virgula"
            type="number"
          ></C.Form>
          <C.Form placeholder="Titulo"></C.Form>
          <C.Form placeholder="Data" type="date"></C.Form>
          <C.ButtonArea>
            <C.Button>Adicionar</C.Button>
            <C.Button className="btnCancel">Cancelar</C.Button>
          </C.ButtonArea>
        </C.ModalArea>
      </C.Modal>
    </>
  );
};
