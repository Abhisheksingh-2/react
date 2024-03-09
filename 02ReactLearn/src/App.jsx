import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(10)
 
//let counter=10;

const IncreaseValue=()=>{
  if(setCounter<=20){


  setCounter(counter+1);
  }
// console.log("Increase Value:",counter);
//counter=counter+1;


}
const DecreaseValue=()=>{

  
  if(!setCounter==0){
    setCounter(counter-1);
  }
// console.log("Decrease Value: ",counter);
//counter=counter-1;



