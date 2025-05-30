/*import { useState } from "react";

function  Demo(props) {
    let [count,setCount]=useState(0)

    return (
        <>
        <h1>{count}</h1> 
        <button onClick={()=>{setCount(count+1)}}>increment</button>  
        <button onClick={()=>{setCount(count-1)}}>decrement</button>   
        </>
    )
}
export default Demo;
*/

/*function Demo(props) {
    let handleInput=(e)=>{
        console.log(e.target.name)
    }

    return (
        <>
        <input type="text" name="txt_name" id=""onChange={handleInput} />
        <select name="select city" id=""onChange={handleInput}> 
            <option value="wakadi">wakadi</option>
            <option value="chitali">chitali</option>
            <option value="ganeshnagar">ganeshnagar</option>
        
        </select>


            
        </>
    )
}
export default Demo;
*/

    function Demo (){
    let handleInput=(e)=>{
        console.log(e.target.name)
    }

    return (
        <>
         <input type="text"name="txt_name" onChange={handleInput} placeholder="enter name" />
        <input type="text"name="txt_age" onChange={handleInput} placeholder="enter name" />
        </>
    )
}
export default Demo;





