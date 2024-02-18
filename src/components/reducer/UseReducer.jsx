import React, { useReducer } from 'react'
import { reducerFn } from './reducer'
import { products } from './postData'

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducerFn, products)

  console.log(state)
  return (
    <div className='container'>      
      <h2 className='text-center'>
        Use Reducer
      </h2>
      
      <p className='mt-4 text-center'>
        WE'LL HAVE A LOOK INTO THE  useReducer HOOK HERE 
        FOR THE STATES WE USE useState  IN REACT JUST LIKE THIS 
        WHEN WE  WANT TO HANDLE COMPLEX AND LARGER  STATE WE CAN USE 
        useReducer 
      </p>

      <div className='flex border flex-wrap'>
       {
       state.map((result,index)=>(
        <div className='w-1/3 p-5 border border-red' key={index}>
          <img src={result.thumbnail} alt="" />
          <h3 className='mt-2 text-lg sm:text-xl'>{result.title}</h3>
          <p>
            {result.description}
          </p>
        </div>
       )) 
       }
      </div>
    </div>
  )
}

export default UseReducer
