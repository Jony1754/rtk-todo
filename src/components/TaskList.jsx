import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const stateTask = useSelector((state) => state.tasks);
  const handleDelete = (id) => {
    console.log('delete task: ', id);
  };

  console.log('TaskList: ', stateTask);
  return (
    <div>
      {stateTask.map((task) => {
        return (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => handleDelete(task.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
