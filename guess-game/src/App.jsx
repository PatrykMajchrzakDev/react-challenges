/* eslint-disable react/prop-types */
import GuessGame from "./GuessGame";

const App = () => {
  const options = { Germany: "Berlin", Azerbaijan: "Baku" };
  return (
    <>
      <GuessGame data={options} />
    </>
  );
};

export default App;
