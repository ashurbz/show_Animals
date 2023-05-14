import { useState } from "react";

const animalsArr = ["bird", "cat", "cow", "dog", "gator", "horse"];

const randomAnimals = () => {
  return animalsArr[Math.floor(Math.random() * animalsArr.length)];
};

function App() {
  const [animals, setAnimals] = useState([]);

  const handleOnClick = () => {
    setAnimals([...animals, randomAnimals()]);
  };
  return (
    <div>
      <button
        onClick={() => {
          handleOnClick();
        }}
      >
        Show Animals
      </button>
      <h3>{animals}</h3>
    </div>
  );
}

export default App;
