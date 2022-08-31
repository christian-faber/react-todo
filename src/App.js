import "./App.css";
import { ToDoList } from "./components"; //
import { useState, useRef } from "react";
import ToDoName from "./components/ToDoName";
// import {v4 as uuidv4}

function App() {
  // useState
  const [todos, setToDos] = useState([]);
  const inputRef = useRef();

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
  const removeToDo = (id) => {
    setToDos((todos) =>
      todos.filter((todo) => {
        return todo.id !== id;
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
        <input type="text" ref={inputRef} />
        <button type="submit">+</button>
      </form>

      <ToDoList todos={todos} updateName={ToDoName} removeToDo={removeToDo} />
    </div>
  );
}

export default App;
