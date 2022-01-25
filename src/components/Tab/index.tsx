import { Item } from "../../types/valuesTypes";
import { TabCard } from "./style";
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
              <div>{item.title}</div>
              <div>{item.value}</div>
              <div>{item.categoria}</div>
            </TabCard>
          );
        })}
      </div>
    </>
  );
};
