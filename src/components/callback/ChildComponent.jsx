// ChildComponent.js
import React, { useEffect } from 'react';

const ChildComponent = ({ onClickCallback }) => {
  useEffect(() => {
  }, []);
  console.log('Child component rendereds');

  return (
    <div className='border border-red-500'>
      <p>Child Component</p>
      <button onClick={onClickCallback}>Click Me</button>
    </div>
  );
};

export default ChildComponent;
