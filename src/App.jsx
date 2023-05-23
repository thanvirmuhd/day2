import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={counterStyles.container}>
      <h2 style={counterStyles.counterText}>Counter: {count}</h2>
      <button onClick={increment} style={counterStyles.button}>
        +
      </button>
      {count > 0 && (
        <button onClick={decrement} style={counterStyles.button}>
          -
        </button>
      )}
    </div>
  );
};

// Inline styles
const counterStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f4f4f4',
  },
  counterText: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  button: {
    fontSize: '1.5rem',
    padding: '5px 10px',
    margin: '5px',
    borderRadius: '5px',
    backgroundColor: '#ccc',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Counter;
