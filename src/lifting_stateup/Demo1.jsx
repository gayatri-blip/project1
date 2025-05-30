 import { useState } from "react"
import Demo2 from "./demo2";
 
 function Demo(props) {
     let [count,setCount]=useState(0)
     function Incr()
     {
        setCount(count+1)
     }
     function decr()
     {
        setCount(count-1)
     }
 
     return (
         <>
         <h1>{count}</h1>
         <h1>demo1</h1>
         <button onClick={Incr}>Increment 1</button> 
         <button onClick={decr}>decrement1</button>   
         <Demo2 count={count} Incr={Incr} decr={decr}/>
         </>
     )
 }
 export default Demo;
 
