import React from 'react'
import { log } from 'util';

export default function OneTask({ task }) {
  console.log(task);
  return (
    <div><h1>{task.name}</h1>
      <h3>{task.isAccepted}</h3>
    </div>
  )
}
