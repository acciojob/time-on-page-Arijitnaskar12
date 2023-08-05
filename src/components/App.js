
import React, { useEffect } from "react";
import './../styles/App.css';
import { useState,useEffect } from "react";

const App = () => {
  var timer;
  let[count,setCount]=useState(0);
  useEffect(()=>{
    timer=setInterval(()=>{
      setCount(count+1);
    },1000)
    return ()=>clearInterval(timer);
  });
  return (
    <div>
        <p>You've been on this page for {count} seconds</p>
    </div>
  )
}

export default App
