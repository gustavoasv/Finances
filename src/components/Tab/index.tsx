import { Item } from "../../types/valuesTypes";
import { Bar, TabCard } from "./style";
import { FormateDate } from "../../helpers/formatDate";

type Props = {
  listI: Item[];
};
export const TabMain = ({ listI }: Props) => {
  return (
    <>
      <div>
        {listI.map((item, index) => {
          return (
            <TabCard key={index}>
              <Bar color={item.color}></Bar>
              <div>{item.title}</div>
              <div> R$ {item.value}</div>
              <div>{item.categoria}</div>
              <div>{FormateDate(item.date)}</div>
            </TabCard>
          );
        })}
      </div>
    </>
  );
};
