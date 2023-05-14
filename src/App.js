import { useState } from "react";
import Animals from "./Animals";

const animalsArr = ["bird", "cat", "cow", "dog", "gator", "horse"];

const randomAnimals = () => {
  return animalsArr[Math.floor(Math.random() * animalsArr.length)];
};

function App() {
  const [animals, setAnimals] = useState([]);

  const handleOnClick = () => {
    setAnimals([...animals, randomAnimals()]);
  };
  console.log(animals);
  return (
    <div>
      <button
        onClick={() => {
          handleOnClick();
        }}
      >
        Show Animals
      </button>
      <div>
        {animals.map((animal, index) => {
          return <Animals type={animal} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
