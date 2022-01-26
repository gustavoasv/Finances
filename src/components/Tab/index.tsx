import { Item } from "../../types/valuesTypes";
import { Bar, TabCard } from "./style";

import addZero from "../../helpers/formatDate";
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
              <Bar color={item.select}></Bar>
              <div>{item.title}</div>
              <div> R$ {item.value}</div>
              <div>{item.select}</div>
              <div>{item.date}</div>
            </TabCard>
          );
        })}
      </div>
    </>
  );
};
