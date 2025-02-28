import React, { useState } from 'react'

// Define a custom dictionary of words and their corrections
const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
};
const SpellCheck = () => {
    const [input, setinput] = useState("");
    const [suggestedText, setSuggestedText] = useState("");

    const handleInput = (e) => {
        const value = e.target.value;
        setinput(value);
        const words = value.split(' ');
        
        // Find the first incorrect word and get its correction
        const firstIncorrectWord = words.find(word => customDictionary[word.toLowerCase()]);
        
        // If there's an incorrect word, set the suggestion
        if (firstIncorrectWord) {
            const correctedWord = customDictionary[firstIncorrectWord.toLowerCase()];
            setSuggestedText(correctedWord);
        } else {
            // If no incorrect words, clear the suggestion
            setSuggestedText("");
        }
    }

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }}>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={input}
          onChange={handleInput}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggestedText && (
          <p>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )}
    </div>
  )
}

export default SpellCheck