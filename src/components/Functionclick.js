import React from 'react'
/*For forcefully stop the default behaviour ex stop redirecting 
function cahngeEvent(e){
        e.preventDefault();
        console.log("hello Event Handling...")
    }
return (
        <div>
            <a href="google.com">Click Me</a>
        </div>
    )


*/ 
function Functionclick() {

    function cahngeEvent(){
        console.log("hello Event Handling...")
    }
    return (
        <React.Fragment>
            <button onClick={cahngeEvent}>Click Me</button>
            </React.Fragment>      
            /*
            In react return only one single element therefore 
            We have to add div in inspect we see extra div for that
            To Resolve this problem we use React.Fragment
            Or we can use <>...</>
            "It is used to group multiple elements"
            */
        
    )
}

export default Functionclick
