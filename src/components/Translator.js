import React, { useState } from 'react';

function Translator() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleTranslate = () => {
    // dummy translation logic
    const translatedText = `Translated text: ${inputText}`;
    setTranslatedText(translatedText);
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <h2>Translator</h2>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text to translate"
        />
        <button onClick={handleTranslate}>Translate</button>
        <p>{translatedText}</p>
      </div>
    </div>
  );
}

export default Translator;