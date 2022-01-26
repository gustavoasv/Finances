import { useEffect, useState, ReactChild } from "react";
import { Dash } from "./components/Dashboard/Dash";
import { Item } from "./types/valuesTypes";
import { TabMain } from "./components/Tab";
import Modal from "react-modal";
import { DataItems } from "./data/values";
import "./components/Tab/style";
import { Head } from "./App.style";
import * as C from "./App.style";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "auto",
    width: "420px",
    height: "320px",
    transition: "2s",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
function App() {
  const [list, setList] = useState<Item[]>(DataItems);
  const [income, setIncome] = useState(0);
  const [expanse, setExpanse] = useState(0);
  let [title, setTitulo] = useState("");
  let [value, setValor] = useState(0);
  let [date, setDate] = useState("");
  let [select, setSelectValue] = useState("");

  useEffect(() => {
    let income = 0;
    let expanse = 0;

    for (let i in list) {
      if (list[i].select == "Entrada") {
        expanse += list[i].value;
      } else {
        income += list[i].value;
      }
    }

    setIncome(income);
    setExpanse(expanse);
  }, [list]);

  const [ModalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    if (ModalIsOpen) {
      setIsOpen(false);
    }
  };
  const addArr = () => {
    let newList = [...list];
    let a = { title, value, date, select };
    newList.push(a);
    console.log(list);
    setList(newList);
    closeModal()
  };
  return (
    <>
      <Head>
      <div className="header-title">
          <p>FINANCEAPP</p>
          <button onClick={openModal}> + </button>
        </div>
      </Head>
      <Modal
        isOpen={ModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <C.ContainerModal>
          <h3>ADICIONAR</h3>
          <select onChange={(event) => setSelectValue(event.target.value)}>
            <option>Categorioa</option>
            <option>Entrada</option>
            <option>Saida</option>
          </select>
          <C.Input
            placeholder="Digite o o titulo"
            onChange={(event) => setTitulo(event.target.value)}
          />
          <C.Input
            placeholder="Digite o valor"
            type="number"
            onChange={(event) => setValor(Number(event.target.value))}
          />
          <C.Input
            type="date"
            onChange={(event) => setDate(event.target.value)}
          />
          <C.ButtonsArea>
          <C.ButtonModal onClick={addArr}>
              Adicionar
            </C.ButtonModal>
            <C.ButtonModal className="buttonCancel" onClick={closeModal}>
              Canclelar
            </C.ButtonModal>
          </C.ButtonsArea>
        </C.ContainerModal>
      </Modal>
      <Dash income={income} expanse={expanse}></Dash>
      <TabMain listI={list}></TabMain>
    </>
  );
}

export default App;
