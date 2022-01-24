import { useState } from "react";
import { Dash } from "./components/Dashboard/Dash";
import { Headers } from "./components/Header/Headers";
import { Tabela } from "./components/Tabela";
import { ModalApp } from "./components/Modal/Modal";

function App() {
  return (
    <div>
      <Headers></Headers>
      <Dash></Dash>
    </div>
  );
}

export default App;
