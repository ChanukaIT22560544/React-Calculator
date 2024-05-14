// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setInput('');
      setResult('');
    } else if (value === '+/-') {
      setInput((prevInput) => (prevInput.charAt(0) === '-' ? prevInput.slice(1) : '-' + prevInput));
    } else if (value === '%') {
      // Handle percentage differently
      try {
        const percentage = (eval(input) / 100).toString();
        setInput(percentage);
        setResult(percentage);
      } catch (error) {
        setResult('Error');
      }
    }
    else if (value === 'DEL') {
      // Handle delete or backspace
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input).toString();
      setInput(calculatedResult);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    } 
  };

  return (
    <div className="calculator">
      <h3>CASIO</h3>
      <input
        type="text"
        className="calculator-screen"
        value={input}
        placeholder="0"
        readOnly
      />

      <div className="calculator-buttons">
        <div className="calculator-row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('+/-')} className="operator">+/-</button>
        </div>

        <div className="calculator-row">
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('.')}>&#46;</button>
          <button onClick={() => handleButtonClick('%')} className="operator">%</button>
        </div>

        <div className="calculator-row">
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('DEL')}className='del'>DEL</button>
          <button onClick={() => handleButtonClick('AC')} className="operator">
            AC
          </button>
        </div>

        <div className="calculator-row">
          <button onClick={() => handleButtonClick('/')} className="operator">
            /
          </button>
          <button onClick={() => handleButtonClick('*')} className="operator">
            *
          </button>
          <button onClick={() => handleButtonClick('+')} className="operator">
            +
          </button>
          <button onClick={() => handleButtonClick('-')} className="operator">
            -
          </button>
          <button onClick={handleCalculate} className="operator tall">
            =
          </button>
        </div>

        

        <div className="calculator-row">
          {/* Additional buttons if needed */}
          
        </div>
      </div>

      
    </div>
  );
}

export default App;
