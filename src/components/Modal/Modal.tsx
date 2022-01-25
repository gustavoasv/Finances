import { useState } from "react";
import Modal from "react-modal";
import { ButtonOpenModal } from "../Header/style";
import * as C from "./styles";

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

export const ModalApp = () => {
  const [ModalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    if (ModalIsOpen) {
      setIsOpen(false);
    }
  };
  return (
    <div>
      <ButtonOpenModal onClick={openModal}> + </ButtonOpenModal>
      <Modal
        isOpen={ModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <C.ContainerModal>
          <h3>ADICIONAR</h3>
          <C.Select>
            <option>
              Categoria
            </option>
            <option>Entrada</option>
            <option>Saída</option>
          </C.Select>
          <C.Input placeholder="Digite o o titulo" />
          <C.Input placeholder="Digite o valor" />
          <C.Input type="date" />
          <C.ButtonsArea>
            <C.ButtonModal>Adicionar</C.ButtonModal>
            <C.ButtonModal className="buttonCancel" onClick={closeModal}>
              Canclelar
            </C.ButtonModal>
          </C.ButtonsArea>
        </C.ContainerModal>
      </Modal>
    </div>
  );
};
