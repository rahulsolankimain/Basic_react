import React from 'react';

class Channel extends React.Component
{
    constructor()
    {
        super(); //React Component na constructor ne access krwa
        this.state={            //state ne access krwa
            msg:'Technical guruji R.D Youtube Channel'
        }
    }
    subscibe() 
    {
        this.setState({ //state ni value change krwa this.setState
            msg:'Thanks for joining Us'
        })
    }
    render()
    {
        return(
            <div>
            <h2>{ this.state.msg }</h2>
            <button onClick={ () => { this.subscibe() }}>Subscribe and join Us</button>
            </div>
        );
    }
}

export default Channel;