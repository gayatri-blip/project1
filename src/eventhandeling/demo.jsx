 let Demo = ()=>{
    
    function Show (name) {
        alert(name)
    }
    return(
        <div>
            <h1>Event Handeling</h1>
            <button onClick={()=>{Show('ishwari')}}>click</button>
        </div>
    )
}
export default Demo;

