import React, { useState } from 'react'

const buttonValues = [
    7,8,9,'+',
    4,5,6,'-',
    1,2,3,'*',
    'C',0,'=','/'
]
const Calculator = () => {
    const [calculated, setCaclulated] = useState(false);
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setInput(""); // Clear the input
            setResult("");
        } else if (value === '=') {
            try {
                // Evaluate the expression and update the input
                if(input.toString() === "0/0"){
                    setResult("NaN");
                } else if (input.trim() === "") {
                    setResult("Error"); // Handle empty input
                } else {
                    setResult(eval(input).toString());
                }
                setCaclulated(true);
            } catch (error) {
                setResult("Error"); // Handle any errors in evaluation
            }
        } else {
            setInput(prevInput => prevInput + value); // Append the clicked value to the input
        }
    };
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "90vh"
    }}>
        <h1>React Calculator</h1>
        <input type="text" name="calculate" id="calculate" 
            value={input} 
            readOnly // Make the input read-only
        style={{
            display:"block",        
            width: "300px",
            margin: "10px 0"
        }} />
        {calculated && <div style={{ margin: "20px 0"}}>{result}</div> }
        <div style={{
            display: "grid",
            gap: "5px",
            gridTemplateColumns: "repeat(4, 1fr)",
        }}>
            {buttonValues.map((value, index) => (
                <button 
                    key={index} 
                    onClick={() => handleButtonClick(value)} 
                    style={{
                        padding: "20px",
                        fontSize: "18px",
                        border: "1px solid black"
                    }}
                >
                    {value}
                </button>
            ))}
        </div>
    </div>
  )
}

export default Calculator