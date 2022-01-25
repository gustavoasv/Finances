
import * as C from "./style";
import { useEffect, useState } from "react";

type Props = {
  income: number;
  expanse: number;
}

  export const Dash = ({income, expanse}: Props) => {
  return (
    <>
      <C.Cards>
        <C.Card>
          <C.CardContents>
            <C.Texts>Entradas</C.Texts>
            <C.Valor className="valor">R$ {expanse}</C.Valor>
          </C.CardContents>
        </C.Card>
        <C.Card>
          <C.CardContents>
            <C.Texts>Saída</C.Texts>
            <C.Valor className="valor">R$ {income}</C.Valor>
          </C.CardContents>
        </C.Card>
        <C.Card>
          <C.CardContents>
            <C.Texts>Balanço</C.Texts>
            <C.Valor className="valor">R$ {income - expanse}</C.Valor>
          </C.CardContents>
        </C.Card>
      </C.Cards>
    </>
  );
};

