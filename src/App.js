import "./App.css";
import { ToDoList } from "./components"; //
import { useState, useRef } from "react";
// import {v4 as uuidv4}

function App() {
  // useState
  const [todos, setToDos] = useState([]);
  const inputRef = useRef();
  console.log(todos);

  // add new //
  const addToDo = (evt) => {
    evt.preventDefault();
    const name = inputRef.current.value;
    const id = Math.max(...todos.map((todo) => todo.id), 0) + 1;

    setToDos((todos) => {
      return [...todos, { id, name, completed: false }];
    });
    inputRef.current.value = "";
  };

  // remove //
  const removeToDo = (evt) => {
    setToDos((todos) =>
      todos.filter((todo) => {
        return todo.id !== evt.target.value;
      })
    );
  };

  // edit ////

  // const editToDo = ({ edit }) => {
  //   const fixToDo = todos.map((todo) => {
  //     if (edit.target.id === todo.id) {
  //       return { ...todo, name: edit.target.value };
  //     }
  //   });
  // };

  // return
  return (
    <div className="App">
      <form onSubmit={addToDo}>
        <label>New Task</label>
        <input type="text" ref={inputRef} />
        <button type="submit">+</button>
      </form>

      <ToDoList todos={todos} removeToDo={removeToDo} />
    </div>
  );
}

export default App;
