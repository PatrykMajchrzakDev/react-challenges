import { useState } from "react";
import ListContainer from "./components/ListContainer";
import Actions from "./components/Actions";
import "./App.css";
import { items } from "./data";

function App() {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);

  const handleCheckItem = (item: string, isChecked: boolean) => {
    console.log(item, isChecked);
  };

  return (
    <section className="root-container flex-center">
      <ListContainer items={leftItems} onCheckItem={handleCheckItem} />
      <Actions />
      <ListContainer items={rightItems} onCheckItem={handleCheckItem} />
    </section>
  );
}

export default App;
