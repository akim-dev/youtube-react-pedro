import React from "react";
import { useState } from "react";
import Task from "./Task";
import "./style.css";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [taskBaru, setTaskBaru] = useState("");

  const handleChange = (e) => {
    setTaskBaru(e.target.value);
  };

  const addTask = () => {
    // let arr = [];
    // const name = "pedro";
    // arr.push(name);

    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: taskBaru,
      completed: false,
    };

    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  };

  const deletetodo = (id) => {
    const newTodoList = todoList.filter((todo) => {
      if (todo.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setTodoList(newTodoList);
  };

  //   const completedTask = (id) => {
  //     setTodoList(
  //       todoList.map((todo) => {
  //         if (todo.id === id) {
  //           return { ...todo, completed: true };
  //         } else {
  //           return todo;
  //         }
  //       })
  //     );
  //   };

  return (
    <div className="App">
      {/* input section start */}
      <div className="addTask">
        <input onChange={handleChange} />
        <button type="submit" onClick={addTask}>
          Tambah
        </button>
      </div>
      {/* input section end */}
      {/* list start */}
      <div className="list">
        {todoList.map((todo) => {
          return (
            <div>
              {/* {todo.id}
              <h2 key={todo.id}>{todo.taskName}</h2>
              <button onClick={() => deletetodo(todo.id)}>x</button> */}
              <Task
                taskName={todo.taskName}
                id={todo.id}
                deleteTask={deletetodo}
                // todocomplete={completedTask}
              />
            </div>
          );
        })}
      </div>
      {/* list end */}
    </div>
  );
}

export default Todo;
