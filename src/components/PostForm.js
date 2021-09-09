import React, { Component } from 'react'
import axios from 'axios';
export class PostForm extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            userid : '',
            title : '',
            body : ''
        }
    }
    changehandler = (e) =>{

        this.setState({
            [e.target.name] : e.target.value    
        })
    }
    handlesubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state) //this.state means all values aa jayegi
        .then(response => {
            console.log(response);
        })   
        .catch(error => {
            console.log(error);
        })
    }
    render() {
        const {userid ,title ,body} = this.state
        return (
            
            <div>
                <form onSubmit={this.handlesubmit}> 
                    <div>
                        <label>User Id :  </label>
                        <input type="text" value={userid} name="userid" onChange={this.changehandler} />
                    </div>
                    <div>
                        <label>Title :  </label>
                        <input type="text" value={title} name="title" onChange={this.changehandler} />
                    </div>
                    <div>
                        <label>Body :  </label>
                        <input type="text" value={body} name="body" onChange={this.changehandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
