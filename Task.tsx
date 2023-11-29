import React, {memo} from 'react';

const Tasks = ({tasks, addTask}) => {
  return (
    <div>
      <h2>Tasks list</h2>
      {tasks.map((task, i) => (
        <p key={i}>{task}</p>
      ))}
      <button onClick={addTask} title="Add Task"></button>
    </div>
  );
};

export default memo(Tasks);
