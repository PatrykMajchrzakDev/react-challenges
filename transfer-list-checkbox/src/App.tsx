import { useState } from "react";
import ListContainer from "./components/ListContainer";
import Actions from "./components/Actions";
import "./App.css";
import { items } from "./data";

function App() {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState<string[]>([]);
  const [leftCheckedItems, setLeftCheckedItems] = useState<string[]>([]);
  const [rightCheckedItems, setRightCheckedItems] = useState<string[]>([]);

  //fn checks if items checkbox just got checked or has been already checked
  const handleLeftCheckedItems = (item: string, isChecked: boolean) => {
    //if just got checked then update leftCheckedItems with new variable
    if (isChecked) {
      setLeftCheckedItems((prevLeftCheckedItems) => [
        ...prevLeftCheckedItems,
        item,
      ]);
    }
    //If checked item has already been checked then filter out the item from leftCheckedItems
    if (!isChecked) {
      setLeftCheckedItems((prevLeftCheckedItems) => {
        return prevLeftCheckedItems.filter(
          (checkedItem) => checkedItem !== item
        );
      });
    }
  };

  //Below fn if mirrored representation of handleLeftCheckedItems
  const handleRightCheckedItems = (item: string, isChecked: boolean) => {
    if (isChecked) {
      setRightCheckedItems((prevRightCheckedItems) => [
        ...prevRightCheckedItems,
        item,
      ]);
    }

    if (!isChecked) {
      setRightCheckedItems((prevRightCheckedItems) => {
        return prevRightCheckedItems.filter(
          (checkedItem) => checkedItem !== item
        );
      });
    }
  };

  const handleItemsToRight = () => {
    setRightItems((prevRightItems) => [...prevRightItems, ...leftCheckedItems]);
    setLeftItems((prevLeftItems) =>
      prevLeftItems.filter((item) => !leftCheckedItems.includes(item))
    );
    setLeftCheckedItems([]);
  };

  const handleItemsToLeft = () => {
    setLeftItems((prevLeftItems) => [...prevLeftItems, ...rightCheckedItems]);
    setRightItems((prevRightItems) =>
      prevRightItems.filter((item) => !rightCheckedItems.includes(item))
    );
    setRightCheckedItems([]);
  };

  return (
    <section className="root-container flex-center">
      <ListContainer items={leftItems} onCheckItem={handleLeftCheckedItems} />
      <Actions onMoveToRight={handleItemsToRight} onMoveToLeft={handleItemsToLeft}/>
      <ListContainer items={rightItems} onCheckItem={handleRightCheckedItems} />
    </section>
  );
}

export default App;
