
import React, { useState } from 'react';
import './App.css';

function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleNum1Change = (e) => setNum1(e.target.value);
  const handleNum2Change = (e) => setNum2(e.target.value);

  const validateInputs = () => {
    if (num1 === '') {
      setError('Error!');
      setMessage('Num 1 cannot be empty');
      return false;
    }

    if (num2 === '') {
      setError('Error!');
      setMessage('Num 2 cannot be empty');
      return false;
    }

    if (isNaN(num1) || isNaN(num2)) {
      setError('Inputs must be valid numbers');
      return false;
    }

    setError('');
    return true;
  };

  const handleOperation = (operation) => {
    if (!validateInputs()) return;

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res;

    switch (operation) {
      case 'add':
        res = n1 + n2;
        break;
      case 'subtract':
        res = n1 - n2;
        break;
      case 'multiply':
        res = n1 * n2;
        break;
      case 'divide':
        if (n2 === 0) {
          setError('Cannot divide by zero');
          return;
        }
        res = n1 / n2;
        break;
      default:
        return;
    }

    setResult(res);
    setMessage(`Result: ${res}`);
    //setMessage(result);
  };

  return (
    <div className='form'>
      <h1>React Calculator</h1>
      <input
        type="text"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Num 1"
      />
      <input
        type="text"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Num 2"
      />
      <div className='buttons'>
        <button onClick={() => handleOperation('add')}>+</button>
        <button onClick={() => handleOperation('subtract')}>-</button>
        <button onClick={() => handleOperation('multiply')}>*</button>
        <button onClick={() => handleOperation('divide')}>/</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && !error && (
        <p style={{ color: 'green', fontSize: '18px' }}>Success!</p>
      )}
      {message}
    </div>
  );
}

export default App;
