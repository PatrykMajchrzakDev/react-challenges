import React, { useState } from "react";

const Item: React.FC<{
  item: string;
  onCheckItem: (item: string, isChecked: boolean) => void;
}> = ({ item, onCheckItem }) => {
  const [isItemChecked, setIsItemChecked] = useState(false);

  const handleChangeStatus = () => {
    const updatedStatus = !isItemChecked;
    setIsItemChecked(updatedStatus);
    onCheckItem(item, updatedStatus); // Pass the item and updated status to the callback
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isItemChecked}
        onChange={handleChangeStatus}
      />
      {item}
    </label>
  );
};

export default Item;
