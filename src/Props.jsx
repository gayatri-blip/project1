function Props({students})
{
    return(
        <>
       {/* <h2>{name}-{age}</h2> */}
       {/* {stud.name} - {stud.age}  */}
       {
        students.map((s)=>{
            return(
                <h1>{s.name} - {s.age}</h1>
            );
        })
       }
        
        </>
    )
}
export default Props