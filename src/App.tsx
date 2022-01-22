import { useState } from "react";
import { Dash } from "./components/Dashboard/Dash";
import { Headers } from "./components/Header/Header";
import { Tabela } from "./components/Tabela";
import { Modal } from "./components/Modal";
function App() {
  return (
    <>
      <Headers></Headers>
      <Dash></Dash>
      <Tabela></Tabela>
      <Modal></Modal>
    </>
  );
}

export default App;
