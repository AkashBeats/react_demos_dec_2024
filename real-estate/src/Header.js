import React, { useState } from "react";
import { Image } from "./Image";
import Navigation from "./Navigation";
export const Header = ({ primaryHeading, imageRef }) => {
  const [message, setMessage] = useState("ReactJs");

  console.log(message);
  console.log(setMessage);
  const handleClick = (event) => {
    console.log("click Event Fired");
    console.log(event);
  };

  const changeText = (event) => {
    setMessage((currVal) => "AngularJS");
    console.log("inside change text");
  };
  return (
    <div>
      <h1>{primaryHeading}</h1>
      <h2>{message}</h2>
      {/* <Image imageRef={imageRef} altText={'company logo'}></Image> */}
      <Navigation handleClick={handleClick}></Navigation>
      <button onClick={changeText}>Change</button>
    </div>
  );
};
