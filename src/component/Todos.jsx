import React, { useEffect, useState } from "react";

const Todos = () => {
  const [word, setWord] = useState("");
  const [todos, setTodos] = useState([]);

  const savInfo = () => {
    fetch("https://m6g3bt.sse.codesandbox.io/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        value: word,
        isCompleted: false,
      }),
    })
      .then((res) => res.json())
      .then((day) => {
        //   console.log(day);
        setTodos([...todos, day]);
        setWord("");
      });
  };

  useEffect(() => {
    fetch("https://m6g3bt.sse.codesandbox.io/todos?_page=10&_limit=10")
      // fetch("http://localhost:8080/todos")
      .then((res) => res.json())
      .then((day) => {
        console.log(day);
        setTodos(day);
      });
  }, []);
  return (
    <div>
      <input value={word} onChange={({ target }) => setWord(target.value)} />
      <button onClick={savInfo}>+</button>
      <div>
        <div>
          {todos.map((elem) => (
            <div key={elem.id}>{elem.value}
            <button>Edit</button>
            <button>Delete</button>
    
            </div>
))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
