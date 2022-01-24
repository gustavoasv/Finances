import * as C from "./style";
import { ButtonOpenModal } from "./style";
import { ModalApp } from "../Modal/Modal";

export const Headers = () => {
  const title: string = "FinanceApp";

  return (
    <>
      <C.bgHeader>
        <div className="header-title">
          <p>{title.toUpperCase()}</p>
         <ModalApp></ModalApp>
        </div>
      </C.bgHeader>
    </>
  );
};
