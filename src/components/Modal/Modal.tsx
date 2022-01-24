import { useState } from "react";
import Modal from "react-modal";
import { ButtonOpenModal } from "../Header/style";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "auto",
    width: "400px",
    height: "500px",

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
        <h1>MODALLLLLL</h1>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </div>
  );
};
