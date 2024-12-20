import React, { useState, useEffect } from "react";

export const KnowEffect = () => {
  const [count, setCount] = useState(1);
  const [age, setAge] = useState(10);

  const handleChange = () => {
    setCount((currVal) => currVal + 1);
  };

  const handleAgeChange = () => {
    setAge((currVal) => currVal + 1);
  };
  const fetchData = async () => {

    fetch("http://localhost:8080/orders")
      .then((resp) => resp.json())
      .then((data) => console.log(data));

    // let response = await fetch("http://localhost:8080/orders");
    // let data =await response.json()
    // console.log(data)

  };
  useEffect(() => {
    console.log("use Effect Called");
    fetchData();
    
  }, []);

  return (
    <div>
      <p>Likes{count}</p>
      <p>Age{age}</p>
      <button onClick={handleChange}>Like</button>
      <button onClick={handleAgeChange}>Age</button>
    </div>
  );
};
