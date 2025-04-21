import React, { useState, useMemo } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);

  // Expensive computation

  const expensiveCalculation = (num) => {
    console.log('Performing an expensive calculation...');
    return num * 2;
  };

  // Memoized result of the expensive calculation
  const memoizedResult = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>Expensive Calculation Result: {memoizedResult}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default ExpensiveComponent;
