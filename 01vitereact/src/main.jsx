import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function Myapp(){
//     return (
//         <>
//         <h1>My app is the best app</h1>
//         <p>Hello, Everyone| ABHISHEK SINGH</p>
//         </>
//     )
// }
const reactElement={
    type:'a',
       props:{
       href:'https://google.com',
       target:'_blank'
       
    },
    children:'Click me to visit google',
    
}

const anotherElement=(
    <a href="https://google.com" target="_blank">Visit the google</a>
)


ReactDOM.createRoot(document.getElementById('root'))
.render(
 
    anotherElement 
  
)
