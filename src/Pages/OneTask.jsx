import React from "react";

export default function OneTask({ task }) {
  // console.log(task);
  if (task.isAccepted)
    return (
      <div className="one-tasks-container">
        <p className="accepted-tasks-details">{task.name}</p>
        <p>You were accepted for this task</p>
      </div>
    );
  else
    return (
      <div className="one-tasks-container">
        <p className="accepted-tasks-details">{task.name}</p>
        <p className="accepted-tasks-details">No answer yet...</p>
      </div>
    );
}
