import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {incNumber , decNumber} from './action/function'

function App() {

  const myState = useSelector((state) => state.changeNumber);
  const disPatch = useDispatch();

  return (
        <div>
        <button onClick = {()=>disPatch(incNumber())}>  inc </button> 
          <input value= {myState}/> 
        <button onClick = {()=>disPatch(decNumber())}>  dec </button>
       </div>
 
  );
}

export default App;
