import React from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function Routing() {
    return (
        <Router>
        <div>
           <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/users">USERS</Link>
                </li>
           </ul>
        </div>

        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        </Router>
    )   
}
function Home()
{
    return <h1>You are in HOME page</h1>; 
}
function About()
{
    return <h1>You are in About Section</h1>;
}
function Users()
{
    return <h1>You are in Users Section</h1>;
}