// Square.js
import React, { useMemo } from 'react';
// { number }
const Square = ({ number }) => {
    console.log('Square rendered')
  const squareResult = useMemo(() => {
    console.log('Calculating square...');
    return number * number;
  }, [number]);

  return (
    <div>
      <p>Original Number: {number}</p>
      <p>Square: {squareResult}</p>
    </div>
  );
};

export default Square;
