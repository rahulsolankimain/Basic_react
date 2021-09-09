import React from 'react'
import './Style.css';
/*To use multiple class we use template literals
syntax below */
function Stylesheet(props) {
    let className =props.isvalue ? 'demo' : 'demo2';
    return (
        <div>
            <h1 className={ `${className} demo3 `}>Hii Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
