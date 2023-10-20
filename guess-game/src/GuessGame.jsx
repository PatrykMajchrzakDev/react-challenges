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
    //Check if there are at least two buttons with incorrect state and if so then change back to default
    const incorrectButtons = buttonOptions.filter(
      (item) => item.state === "INCORRECT"
    );

    if (incorrectButtons.length === 2) {
      setButtonOptions((prevOptions) =>
        prevOptions.map((item) =>
          item.state === "INCORRECT" ? { ...item, state: "DEFAULT" } : item
        )
      );
    }

    // Set the state of the clicked card to "SELECTED."
    setButtonOptions((prevOptions) =>
      prevOptions.map((item) =>
        item === option ? { ...item, state: "SELECTED" } : item
      )
    );
  };

  //check if selected buttons are correct by comparing them to default prop
  //check for objects with "selected" state and map their values in an array
  useEffect(() => {
    let isMatchFound = false;
    const selectedButtons = buttonOptions
      .filter((item) => {
        return item.state === "SELECTED";
      })
      .map((item) => item.value);

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
          className={`${
            option.state === "SELECTED"
              ? "selected"
              : option.state === "INCORRECT"
              ? "wrong-match"
              : option.state === "DEFAULT"
              ? "default-state"
              : ""
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
