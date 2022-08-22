import React from "react";
import { ToDo } from "./ToDo";

export const ToDoList = ({ todos, removeToDo, ToDoName }) =>
  todos.map((todo) => (
    <ToDo
      key={todo.id}
      todo={todo}
      removeToDo={removeToDo}
      // editToDo={editToDo} add "editToDo" to props
      ToDoName={ToDoName}
    />
  ));
