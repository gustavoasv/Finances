import { useState } from "react";
import { Dash } from "./components/Dashboard/Dash";
import { Headers } from "./components/Header/Header";
import { Tabela } from "./components/Tabela";

function App() {
  return (
    <>
      <Headers></Headers>
      <Dash></Dash>
      <Tabela></Tabela>
    </>
  );
}

export default App;
