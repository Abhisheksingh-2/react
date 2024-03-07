import Chai from "./chai"

function App() {
  
const username='ABHISHEK SINGH'

  return (
   <>
   <h1> React learn with Vite  | {username}</h1>
<p> Vite is a build tool that aims to provide a faster and leaner devlopment experience for modern web projects. 
  It consists of two major parts:

* A dev server that provides rich feature enhancements over native ES modules, for
 example extremely fast Hot Module Replacement (HMR).

* A build command that bundles your code with Rollup, pre-configured to output highly 
optimized static assets for production.

Vite is opinionated and comes with sensible defaults out of the box. Read about what  possible in the Features Guide. 
Support for frameworks or integration with other tools is possible through Plugins.</p>

   <Chai/>
   </>
  )
}

export default App
