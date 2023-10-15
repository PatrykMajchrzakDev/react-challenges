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

  //check for objects with "selected" state and map their values in an array
  useEffect(() => {
    let isMatchFound = false;
    const selectedButtons = buttonOptions
      .filter((item) => {
        return item.state === "SELECTED";
      })
      .map((item) => item.value);

    //check if selected buttons are correct
    if (selectedButtons.length === 2) {
      //loop through data and check combinations
      for (let item of Object.entries(data)) {
        //if correct remove buttons
        if (item.sort().join() === selectedButtons.sort().join()) {
          const updatedButtonOptions = buttonOptions.filter(
            (item) => !selectedButtons.includes(item.value)
          );
          setButtonOptions(updatedButtonOptions);
          isMatchFound = true;
        }
      }

      //if wrong picks change state and bg is changed in classList
      if (!isMatchFound) {
        setButtonOptions((prevOptions) =>
          prevOptions.map((item) => ({
            ...item,
            state: selectedButtons.includes(item.value)
              ? "INCORRECT"
              : item.state,
          }))
        );
      }
    }
  }, [buttonOptions, data]);

  return (
    <>
      {buttonOptions.map((option) => (
        <button
          key={option.value}
          className={`${option.state === "SELECTED" ? "selected" : ""} ${
            option.state === "INCORRECT" ? "wrong-match" : ""
          }`}
          onClick={() => handleCardClick(option)}
        >
          {option.value}
        </button>
      ))}
      {buttonOptions.length === 0 ? <h1>Congratulations!</h1> : <p></p>}
    </>
  );
};

export default GuessGame;
