import React from "react";

const Task = (props) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.completed ? "green" : "red" }}
    >
      {/* {todo.id} */}
      <h2>{props.taskName}</h2>
      {/* <button onClick={() => props.todocomplete(props.id)}>Complete</button> */}
      <button onClick={() => props.deleteTask(props.id)}>x</button>
    </div>
  );
};

export default Task;
