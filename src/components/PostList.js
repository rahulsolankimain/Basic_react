import React, { Component } from 'react'
import axios from 'axios'
export default class PostList extends Component {

   constructor(props) {
       super(props)
   
       this.state = { 
            posts : [],
            error:''
       }
   }
   componentDidMount()
   {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            this.setState({
                posts : response.data
            });
            console.log(response)
        })
        .catch(error => {
            this.setState({
            error : 'No Data Found'
            });
            console.log(error)
        })
    }
   
    render() {
        const {posts,error} =this.state;
        return (
            <div>
                 List Post Data
                 {
                     posts.length ? 
                     posts.map(post=><div key={post.id}>{ post.title} </div>) : null//in map function single line me hume
                     //{}zarurat nhi he post isme parameter he
                 }
                 {
                     error ? <div>{error}</div>: null
                 }
            </div>
        )
    }
}

