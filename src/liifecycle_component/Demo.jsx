import { useEffect, useState } from "react"

function Demo(props) {
    let [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("component create/mount")

        return ()=>{
            console.log("component remove/unmount")
        }

    },[])
    useEffect(()=>{
        console.log("component update")
    },[count])
    

    return (
        <>
        <h1>component life cycle</h1>
         <h1>{count}</h1>  
          <button onClick={()=>{setCount(count+1)}}>increment</button> 
        </>
    )
}
export default Demo;
