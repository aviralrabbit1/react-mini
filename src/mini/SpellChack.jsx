import React, { useState } from 'react'

// Define a custom dictionary of words and their corrections
const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
};
const SpellChack = () => {
    const [input, setinput] = useState("");
    const [suggestedText, setSuggestedText] = useState("");

    const handleInput = (e) => {
        setinput(e.target.value)
        const words = input.split(' ');
        const correctedWords = words.map((word) => {
            const correctedWord = customDictionary[word.toLowerCase()];
            return correctedWord || word;
        });
        const correctedText = correctedWords.join(" ");
        // Set the suggested text (first corrected word)
        const firstCorrection = correctedWords.find(
            (word, index) => word !== words[index]
        );
        setSuggestedText(firstCorrection);
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

export default SpellChack