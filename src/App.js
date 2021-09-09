import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Cheader from './components/Cheader';
import Propsbyfunc from './components/Propsbyfunc';
import Propsbyclass from './components/Propsbyclass';
import Channel from './components/Channel';
import Functionclick from './components/Functionclick';
import CFunctionclick from './components/CFunctionclick';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './Appstyle.css';
import Style from './Appstyle.module.css'; //the nAME style is a module 
import Form from './components/Form';
import Routing from './components/Routing';
import LifecycleA from './components/LifecycleA';
import Product from './components/Product';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
//<---------------------This is for Props in Class Components---------------->
class App extends React.Component
{
  render()
  {
    return(
      <div className="App">
            { /*<Propsbyclass name="This is rahil" />
             <Channel />
             <Functionclick />
             <CFunctionclick roll="102"/>
             <h1 className={Style.success}>Green</h1>
             <h1 className='error'>Error</h1>
             <Stylesheet isvalue={false} />
             <Inline />
             <Form />
             <Routing />
             <LifecycleA />
             <Product />
             <PostList /> 
             <PostForm />*/}
             <HookCounter />
      </div>
    );
    
  }
}
//<---------------------End for Props in Class Components---------------->
/*---------For export single const------------
In React js you can import single const by writing this
1.In Header.js file make
export const Header =() => {
  return <h1>This is Functional Component</h1>
}
Then in App.js file import by writting below 
2.
import {Header} from './components/Header';
*/
 

//In react project starts index.js
//App.js is called as component
/*
const name=<span>Hello legend</span> //in jsx we can use html inside it but note that not use double codes

const test = () => {
  return alert("you are inside a add function");
    }
const verify_age_function = (age) => {
  if(age>18)
  {
    return <span>You are adult</span>;
  }
  else
  {
    return <span>You are not adult</span>;
  }
}

<----------------this is functional component---------------->
function App() {
  return (
    <div className="App">
      <h1> hello rahil , { name}</h1>    
       <button onClick={test}>Click me</button>
       
       { verify_age_function(19,15) }
    </div>
   
  );
}
<----------------Ending functional component---------------->
<----------------this is Class Component---------------->
class App extends React.Component
{
  render()
  {
    return (
   <div className="App">
      
      <Header />
      <Cheader />
   </div>
    );
  }
}
<----------------End of Class Component---------------->
*/

//<---------------------This is for Props in Functional Components---------------->
/*
function App()
{
  return(
    <div className="App">
    <Propsbyfunc name="Rahul" />
    <p>Rahul is bad boy</p>
    </div>
  )
}
*/
//<---------------------End for Props in Functional Components---------------->



export default App;
