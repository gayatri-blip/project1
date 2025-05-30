import react from 'react';
/*function Demo (){
    let  islogin=true;
    if(islogin)
    {
        
        return(
        <> 
         <h1>Home page</h1>
        </>
        )
    }
    else{
        
    
        return(
        <><h1>Login page..</h1>
        </>
        )
    }
 

 
}
export default Demo;
*/


function Demo() {
    let islogin=false

    return (
        <>
         {
            //islogin?<h1>Home page</h1>:<h1>login page</h1>
            islogin && <h1>Home page</h1>
         }   
        </>
    )
}
export default Demo;


