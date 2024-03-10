import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter,setCounter]=useState(10)
 
//let counter=10;

const IncreaseValue=()=>{
  if(counter<20){


  setCounter(counter+1);
  }
// console.log("Increase Value:",counter);
//counter=counter+1;


}
const DecreaseValue=()=>{

  
  if(counter>0){
    setCounter(counter-1);
  }
// console.log("Decrease Value: ",counter);
//counter=counter-1;



}
return (
  <>
  <h1>Learn More About React</h1>
  <h2>Counter value: {counter}</h2>

  <button onClick={IncreaseValue}
   id='increase'>Increase Value</button>
  <br/>
  <button onClick={DecreaseValue} id='decrase'>Decrease Value</button>
  </>
)
}

export default App
