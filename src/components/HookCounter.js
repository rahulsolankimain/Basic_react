import React, { useState,useEffect } from 'react'

export default function HookCounter() {
    //const channelname=useState("Hii Good Evening");
    const [channelname, setname] = useState("Hii Good Evening , "); //this is third way the second setname works as a function
    const [count, setcount] = useState("Click for Subscriber");
    const [counter,setcounter] = useState(0);
    const [counter1,setcounter1] = useState(0);
    // const name= channelname[0];
    //const setname= channelname[1];
    const stateHandler = () => {
        //channelname[1]("Good Night"); //this is first way to change state valueby writing this
        setname("Good Night"); //this is seconnd way
        setcount("50k");
    }

    /*---About useEffect -------
    UseEffect is a function when component rendered it is call.
    another when component update hoga tab call hoga

    //[ counter1]
    In the senario jo me pass kru usi ke liye useEffect call ho uske liye pass kre name
    or jab woh update hoga tab tab useEffect chlegA
    */
    useEffect( () => {
        console.log("hello this is Usestate"); 
    },[counter1]);
    const Increment = () => {
        setcounter(counter + 1);
    }
    const Decrement = () => {
        setcounter1(counter1 - 1);
    }
    const Incremented = () =>{
        for(let i=0;i<10;i++)
        {
           // setcounter(counter+1);
             /*In this the setcounter(counter(0) + 1 =1) then 2nd time setcounter(counter(0) + 1 =1) 
             it left the previous value for that it cannot do increment by 10
             For Previous Value
             1.We have to pass one argument and function body*/
            setcounter(preCount => preCount + 1 );
        }
    }
    return (
        <div>
            {channelname}
            {count}
            {counter}
            <button onClick={stateHandler}>Click me for change</button>
            <button onClick={Increment}> Click for Increment {counter}</button>
            <button onClick={Decrement}> Click for Decrement {counter1}</button>
            <button onClick={Incremented}> Click for Increment By 10 -  {counter}</button>
        </div>
    )
}
