
import * as C from "./style";
import { useState } from "react";

export const Dash = () => {
  const [entrada, setEntrada] = useState("0,00");
  const [saida, setSaida] = useState("0,00");
  const [total, setTotal] = useState("0,00");

  return (
    <>
      <C.Cards>
        <C.Card>
          <C.CardContents>
            <C.Texts>Entradas</C.Texts>
            <C.Valor className="valor">R$ {entrada}</C.Valor>
          </C.CardContents>
        </C.Card>
        <C.Card>
          <C.CardContents>
            <C.Texts>Saída</C.Texts>
            <C.Valor className="valor">R$ {saida}</C.Valor>
          </C.CardContents>
        </C.Card>
        <C.Card>
          <C.CardContents>
            <C.Texts>Total</C.Texts>
            <C.Valor className="valor">R$ {total}</C.Valor>
          </C.CardContents>
        </C.Card>
      </C.Cards>
    </>
  );
};

