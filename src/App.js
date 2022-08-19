import "./App.css";
import { ToDoList } from "./components";
import { useState, useRef } from "react";
// import {v4 as uuidv4}

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  ///////// add new
  const addTodo = (evt) => {
    evt.preventDefault();
    const name = inputRef.current.value;
    const id = Math.max(...todos.map((todo) => todo.id), 0) + 1;

    setTodos((todos) => {
      return [...todos, { id, name, completed: false }];
    });
    inputRef.current.value = "";
  };

  //////////// remove
  const removeToDo = ({ id }) => {
    //
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  ///////edit
  const editToDo = ({ edit }) => {
    const newToDo = todos.map((todo) => {
      if (edit.target.id === todo.id) {
        return { ...todo, name: edit.target.value };
      }
    });
  };

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <label>New Task</label>
        <input type="text" ref={inputRef} />
        <button type="submit">+</button>
      </form>

      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
