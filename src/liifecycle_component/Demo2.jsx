import { useEffect,useState } from "react";

function Demo2({display})

 {
    let [count,setCount]= useState(0)
    useEffect(()=>{
        console.log("component is created")
    },[display])

    useEffect(()=>{
        return ()=>{
            console.log("component are unmount")
        }
    },[display])
    useEffect(()=>{
        console.log("component are updated")
    },[count])
    

    return (
        <>
        <h1>Demo2 component</h1>
          <h1>{count}</h1> 
          <button onClick={()=>setCount(count+1)}>Increment</button> 
        </>
    )
}
export default Demo2;
