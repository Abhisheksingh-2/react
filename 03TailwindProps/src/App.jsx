import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let obj={
    username:'Abhishek',
    age:22,
    address:"Nagod distt- Satna(m.p.)"
  }
  let newArray=[1,2,3,4,5];
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
<Card  username="ABHISHEK SINGH THAKUR" btnText="Click Me" />
<Card  username="SAVITA SINGH" btnText="Click Here"/>

    </>
  )
}

export default App
