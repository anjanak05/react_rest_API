import React from "react";
import "./App.css";
import Todos from "./component/Todos";
import todos from "./"

function App() {

     
    // fetch("http://localhost:8080/todos")
    // fetch("https://m6g3bt.sse.codesandbox.io/todos")
    
  return (
    <div className="App">
      <h1>hello</h1>
   <Todos></Todos>
    </div>
  );
}

export default App;
