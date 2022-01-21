import * as C from "./style";

export const Headers = () => {
  const title: string = "FinanceApp";

  return (
    <>
      <C.bgHeader>
        <div className="header-title">
          <p>{title.toUpperCase()}</p>
          <div>+</div>
        </div>
      </C.bgHeader>
    </>
  );
};
