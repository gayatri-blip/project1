function Demo(){
    let student=[
        {name:'ARCHANA',age:19},
        {name:"ASHWINI",age:21}

    ]
    return(
        <>
        <h1>List Rendering and Key....</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>srno</th><th>name</th><th>age</th>
                </tr>
            </thead>
            {student.map ((s,index)=>{

                return(
                <tr key={index}>
                   <th>{index+1}</th><th>{s.name}</th><th>{s.age}</th> 
                </tr>

                )

            })


            }

        </table>

        </>
    )
}
export default Demo;