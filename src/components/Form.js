import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props)
    {
        super(props);   
        this.state={
            username:'',
            address:''
        }
    }
    Handleusername=(event) => //bYdefault it returns event object
    {
        this.setState({
            username:event.target.value,       
        });
    }
    Handleaddress=(event) =>
    {
        this.setState({
        address:event.target.value
        });
    }
    Handlesubmit = (event) =>
    {
        event.preventDefault();
        alert(` ${this.state.username}  ${this.state.address}`)
    }
    render() {
        return (
            <form>
            <div>
                <lable>User Name : </lable>
                <input type="text" value={this.state.username} onChange={this.Handleusername}></input>
            </div>
            <div>
                <lable>Address : </lable>
                <textarea value={this.state.address} onChange={this.Handleaddress}> </textarea>
            </div>
            <button onClick={this.Handlesubmit}>Submit</button>
            </form>
        )
    }
}
