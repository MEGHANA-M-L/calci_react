import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const calculateResult = () => {
    try {
      const result = eval(input); // This is still using eval, but only for demonstration purposes
      setOutput(result);
    } catch (error) {
      setOutput('Error');
    }
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      setInput('');
      setOutput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={output} />
      <div className="buttons">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, '.', '=', '/'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)} value={value} />
        ))}
        <Button onClick={() => handleButtonClick('C')} value="C" />
      </div>
    </div>
  );
};

export default Calculator;
