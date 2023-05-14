import bird from "./svg/bird.svg";
import cow from "./svg/cow.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import cat from "./svg/cat.svg";
import dog from "./svg/dog.svg";
import heart from "./svg/heart.svg";
import "./animals.css";
import { useState } from "react";

const animalsObj = {
  bird,
  cow,
  gator,
  horse,
  cat,
  dog,
  heart,
};

const Animals = ({ type }) => {
  const [heart, setHeart] = useState(10);

  const handleHeartClick = () => {
    setHeart(heart + 20);
  };
  return (
    <div>
      <div
        onClick={() => {
          handleHeartClick();
        }}
        className="img-container"
      >
        <img className="size" src={animalsObj[type]} alt="animal" />
        <img src={animalsObj.heart} alt="heart" width={heart} />
      </div>
    </div>
  );
};

export default Animals;
