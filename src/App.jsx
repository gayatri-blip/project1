import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Props from './Props'

function App() {
 //let name="Aarush" 
 //let age=9
 /*let stud = {
  name:"Adhira",
  age:6
 } */
let students=[
  {name:"gayatri",age:21},
  {name:"ishwari",age:20}

]


  return (
    <>
    {/*< Props name="Aarush" age={8}/>*/ }
   {/* { <Props stud = {stud}/>} */}
     <Props students = {students}/>
   
    </>  
      

  
      
  
  )
}

export default App
