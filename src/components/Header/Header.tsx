import * as C from "./style";
import Switch from "react-switch";

export const Headers = () => {
  const title: string = "goFinance";

  return (
    <>
      <C.bgHeader>
        <div className="header-title">
          <p>{title.toUpperCase()}</p>
        </div>
      </C.bgHeader>
    </>
  );
};
