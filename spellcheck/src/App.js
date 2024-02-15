import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [inputText, setInputText] = useState('');
  const [correction, setCorrection] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputText(value);
    setCorrection('');
    checkSpelling(value);
  };

  const checkSpelling = (text) => {
    const words = text.toLowerCase().split(/\s+/);
    for (const word of words) {
      if (customDictionary.hasOwnProperty(word)) {
        setCorrection(`Did you mean: ${customDictionary[word]}?`);
        return;
      }
    }
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea value={inputText} onChange={handleInputChange} />
      {correction && <p>{correction}</p>}
    </div>
  );
};

export default XSpellCheck;
