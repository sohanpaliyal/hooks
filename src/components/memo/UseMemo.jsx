import React, { useMemo } from 'react'
import Square from './Square';

const slowFn = (inputVal) =>{
  for (let i = 0; i < 1000000000; i++) {
    
  }

  return inputVal*2;
}
const UseMemo = () => {
 const [inputVal , setInputVal] = React.useState(0);
 const doubleNumber = useMemo(()=>(slowFn(inputVal)),[inputVal])
 const [isDark, setIsDark]= React.useState(true);


  console.log('useMemo component rendered')
  return (
    <div>
      <h2>UseMemo Example </h2>
      <input type="text" value={inputVal} onChange={(e)=>setInputVal(e.target.value)}/>
      <button onClick={()=>setIsDark((prev)=>!prev)}>toggle Theme</button>
      <div style={{background : isDark ? 'red':'#fff',
      color : !isDark ? '#333':'#fff'}}>
        {doubleNumber}
      </div>
      </div>
  );
}

export default UseMemo
