import React from "react";
function Propsbyfunc(props)
{
    return(
        <div>
        <h1>This is Props example by {props.name}{props.children} </h1>
        </div>
    )
}
export default Propsbyfunc;