import { useState } from "react";
import { Dash } from "./components/Dashboard/Dash";
import { Headers } from "./components/Header/Headers";
import { Item } from './types/valuesTypes'
import { TabMain } from "./components/Tab";
import { DataItems } from "./data/values";

import './components/Tab/style'
function App() {

  const [list, setList] = useState<Item[]>(DataItems)

  return (
    <div>
      <Headers></Headers>
      <Dash></Dash>
      <TabMain listI={list}></TabMain>
    </div>
  );
}

export default App;
