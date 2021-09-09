import React, { Component } from 'react';

export class LifecycleA extends Component {
    constructor(props)
    {
       super(props)
       this.state = {
           name:"Rahil"
       }
      
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("LifecycleA : getDerivedStateFromProps");
        return null;
    }

    componentDidMount()
    {
        console.log("LifecycleA : componentDidMount");
    }
    render() {
        console.log("LifecycleA : Render Method");
        return (
            <div>
                LifecycleA
            </div>
        )
    }
}

export default LifecycleA
