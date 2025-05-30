function Demo2({count,Incr,decr}) {
    

    return (
        <>
        <h1>Demo2 </h1>  
        <h1>{count}</h1>
        <button onClick={Incr}>Increment 2</button>  
        <button onClick={decr}>decrement2</button>
        </>
    )
}
export default Demo2;
