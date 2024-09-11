import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const XSpellCheck = () => {
  const [inputText, setInputText] = useState("");
  const [correction, setCorrection] = useState("");


  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputText(value);

   
    const words = value.toLowerCase().split(" ");
    const firstWrongWord = words.find((word) => customDictionary[word]);

   
    if (firstWrongWord) {
      setCorrection(`Did you mean: ${customDictionary[firstWrongWord]}?`);
    } else {
      setCorrection("");
    }
  };

  return (
    <div>
      <h1>Real-Time Spell Check</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        rows="5"
        cols="50"
        placeholder="Type here..."
      />
      {correction && <p style={{ color: "red" }}>{correction}</p>}
    </div>
  );
};

export default XSpellCheck;
