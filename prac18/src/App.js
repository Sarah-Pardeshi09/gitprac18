import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[num1, setNum1]= useState(0);
  const[num2, setNum2]= useState(0);
  const[result, setResult]= useState(0);

 const add = (e) => {
  e.preventDefault(); // Prevent form submission
  const sum = Number(num1) + Number(num2);
  setResult(sum);
}

  return (
    <> 
    <form>
      <input type="number"  value={num1} onChange={(e)=>setNum1(e.target.value)}></input>
      <input type="number"  value={num2} onChange={(e)=>setNum2(e.target.value)}></input>

      <button onClick={add}>Add</button>
      <h1>Addition is {result}</h1>
    </form>

    </>
  );
}

export default App;
