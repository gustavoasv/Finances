import { useEffect, useState } from "react";
import { Dash } from "./components/Dashboard/Dash";
import { Headers } from "./components/Header/Headers";
import { Item } from './types/valuesTypes'
import { TabMain } from "./components/Tab";
import { DataItems } from "./data/values";

import './components/Tab/style'

function App() {

  const [list, setList] = useState<Item[]>(DataItems)
  const[income, setIncome] = useState(0)
  const [expanse, setExpanse] = useState(0)

  useEffect(() => {
    let income = 0;
    let expanse = 0;

    for(let i in list){
      if(list[i].expansetype){
        expanse += list[i].value
      }else{
        income += list[i].value
      }
    }

    setIncome(income)
    setExpanse(expanse)
  }, [list])

  {console.log(list)}

  return (
    <div>
      <Headers></Headers>
      <Dash
      income={income}
      expanse={expanse}
      ></Dash>
      <TabMain listI={list}></TabMain>
    </div>
  );
}

export default App;
