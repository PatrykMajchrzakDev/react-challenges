import "../App.css";
import React from "react";
import Item from "./Item";
const ListContainer: React.FC<{
  items: string[];
  onCheckItem: (item: string, isChecked: boolean) => void;
}> = ({ items, onCheckItem }) => {
  return (
    <div className="flex-center list-container">
      {items.map((item) => {
        return <Item item={item} key={item} onCheckItem={onCheckItem} />;
      })}
    </div>
  );
};

export default ListContainer;
