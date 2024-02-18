import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array, so the callback is memoized and never changes

  console.log("useCallBack rendered ==>")
  return (
    <div>
      <h2>UseCallback Example</h2>
      <p>Click count: {count}</p>
      <ChildComponent onClickCallback={handleClick} />
    </div>
  );
}

export default UseCallback
