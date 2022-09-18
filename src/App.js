import "./App.css";
import { ToDoList } from "./oldComponents"; //
import { useState, useRef, useEffect } from "react";
// import ToDoName from "./components/ToDoName";
import { v4 as uuidv4 } from "uuid";

function App() {
  // const BASE_URL = "http://jsonplaceholder.typicode.com/todos";
  // const URL = `http://jsonplaceholder.typicode.com/todos/${id}`;
  // useState
  const [todos, setToDos] = useState([]);
  const inputRef = useRef();
  // const [endpoint, setEndpoint] = useState(BASE_URL);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) throw new Error("badtimes");
        return res.json();
      })
      .then((data) => setToDos(data))
      .catch((err) => console.error(err));
  }, []);

  // add new to API//
  const addToDo = (evt) => {
    fetch("http://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        userId: "",
        title: "",
        completed: "",
      }),
    })
      .then((res) => res.json())
      .then(
        (json) => console.log(json),

        setToDos((toDo) => {
          return [...toDo, { userId: uuidv4(), title, completed: false }];
        })
      );
    evt.preventDefault();
    const title = inputRef.current.value;
    if (title === "") return;
    // setEndpoint("http://jsonplaceholder.typicode.com/todos");

    // manual code//

    // const id = Math.max(...todos.map((todo) => todo.id), 0) + 1;

    // setToDos((todos) => {
    //   return [...todos, { id: uuidv4(), title, completed: false }];
    // });
    inputRef.current.value = "";
  };

  // remove from API//
  const removeToDo = (id) => {
    fetch(`http://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    });

    setToDos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    fetch(`http://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        userId: "",
        title: "",
        completed: "",
      }),
    })
      .then((res) => res.json())
      .then(
        (json) => console.log(json),
        setToDos((t) =>
          t.map((todoItem) => {
            if (todoItem.id !== id) return todoItem;

            return { ...todoItem, completed: !todoItem.completed };
          })
        )
      );
  };

  const updateName = (id, title) => {
    fetch(`http://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        userId: "",
        title: "",
        completed: "",
      }),
    })
      .then((res) => res.json())
      .then(
        (json) => console.log(json),

        setToDos((todoList) =>
          todoList.map((todoItem) => {
            if (todoItem.id !== id) return todoItem;
            return { ...todoItem, title };
          })
        )
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
  const handleClear = () => {
    setToDos((todoList) => todoList.filter((todo) => !todo.completed));
  };
  return (
    <div className="App" key="div">
      <form onSubmit={addToDo}>
        <input type="text" ref={inputRef} />
        <button type="submit">+</button>
        <button type="button" onClick={handleClear}>
          ✅
        </button>
      </form>

      <ToDoList
        todos={todos}
        // updateName={ToDoName}
        removeToDo={removeToDo}
        handleToggle={handleToggle}
        updateName={updateName}
      />
    </div>
  );
}

export default App;
