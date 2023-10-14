/* eslint-disable react/prop-types */
import "./App.css";
import { useEffect, useState } from "react";
const GuessGame = ({ data }) => {
  const countries = Object.keys(data);
  const capitals = Object.values(data);
  const options = [...countries, ...capitals];

  const [buttonOptions, setButtonOptions] = useState(
    options
      .sort(() => Math.random() - 0.5)
      .map((item) => ({
        value: item,
        state: "DEFAULT",
      }))
  );
  // console.log(data);

  const handleCardClick = (option) => {
    setButtonOptions(
      buttonOptions.map((item) => {
        return item === option
          ? {
              ...item,
              state: "SELECTED",
            }
          : item;
      })
    );
  };

  //maybe filter all cards with state "SELECTED" and check if they match
  useEffect(() => {
    const selectedButtons = buttonOptions.filter((item) => {
      return item.state === "SELECTED";
    });
    console.log(selectedButtons);
    if (selectedButtons.length === 2) {
      //loop through data and check combinations
      for (let item of Object.entries(data)) {
        // const stringItem = Object.keys(item) + Object.values(item);
        console.log(item);
      }
    }
  }, [buttonOptions, data]);

  return (
    <>
      {buttonOptions.map((option) => (
        <button
          key={option.value}
          className={option.state === "SELECTED" ? "selected" : ""}
          onClick={() => handleCardClick(option)}
        >
          {option.value}
        </button>
      ))}
    </>
  );
};

export default GuessGame;
