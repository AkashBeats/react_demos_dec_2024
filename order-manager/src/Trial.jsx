import React, { useState } from "react";

const Trial = () => {
  const [markDetails, setMarkDetails] = useState([20, 30, 40]);

  const addNumberAtEnd = (num) => {
    // setMarkDetails([...markDetails, num])



    setMarkDetails((current) => {
      return [...current, num];
    });
    // console.log(markDetails);
  };
  const addNumberAtStart = (num) => {
    setMarkDetails([num, ...markDetails])

    // setMarkDetails((current) => {
    //   return [num, ...current];
    // });
    console.log(markDetails);
  };
  return (
    <div>
      {markDetails}
      <button
        onClick={() => {
          addNumberAtStart(10);
          addNumberAtEnd(99);
        }}
      >
        Add To Array
      </button>
    </div>
  );
};

export default Trial;
