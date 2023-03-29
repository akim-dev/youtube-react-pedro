import React from "react";

const Task = (props) => {
  return (
    <div>
      {/* {todo.id} */}
      <h2>{props.taskName}</h2>
      <button onClick={() => props.deletetodo(props.id)}>x</button>
    </div>
  );
};

export default Task;
