import React, { useState } from "react";

const Trial = () => {
  const [city, setCity] = useState(["Chennai", "Pune", "Noida"]);
  const [entry,setEntry]=useState('')
  const handleClick = () => {
    setCity((currVal) => [...currVal, entry]);
     setEntry(currVal=> '')
  };

  const handleChange = ({target}) => {
    setEntry(currVal=> target.value)

  };

  return (
    <>
      <ol>
        {city.map((element, idx) => {
          return <li key={idx}>{element}</li>;
        })}
      </ol>
      <span>Search Fld</span><input type="text" onChange={handleChange} value={entry}></input>
      <button onClick={handleClick} name="srchFld">
        Add City
      </button>
    </>
  );
};

export default Trial;
