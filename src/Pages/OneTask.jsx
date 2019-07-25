import React from 'react'
import { log } from 'util';

export default function OneTask({ task }) {
  // console.log(task);
  if (task.isAccepted) return (
    <div><h5>{task.name}</h5>
      <p>Your were accepted for this task</p>
    </div>)
  else return (
    <div><h5>{task.name}</h5>
      <p>No answer yet...</p>
    </div>)
}

