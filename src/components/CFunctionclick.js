import React, { Component } from 'react'


/*.In Normal Function we can not use this keyword
For Use we have two options
1.Change Normal function to Arrow Function
cahngeEvent=() =>
    {
        this.setState(
            {
                cource:"BCA"
            }
        )
        console.log('Hello R.D',this.state.cource)
    }
2.binding Method
bind this to function name
*/
export class CFunctionclick extends Component {

    constructor(props)
    {
        super(props);
        //this.cahngeEvent=this.cahngeEvent.bind(this);

        this.state={
            cource:"MCA",
            roll:this.props.roll
        }
    }
    cahngeEvent= () =>
    {
       this.setState(
            {
                cource:"BCA"
            })
             console.log("Hello R.D",this.props.roll); 
        
    }
    render()
    {
        const numbers=[3,4,5,6];
        const newnumbers=numbers.map(function(numbers){
            return <li>{numbers}</li>
        });
        return (
            <>
                 <button onClick={this.cahngeEvent}>Hit Me</button>
                 {this.props.roll}
                 <ul>{newnumbers}</ul>
            </>
        )
    }
}

export default CFunctionclick
