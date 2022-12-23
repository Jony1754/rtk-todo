import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTask } from '../features/tasks/taskSlice';
const TaskForm = () => {
  // const stateTask = useSelector((state) => state.tasks);
  // console.log('TaskForm state task: ', stateTask);

  const [task, setTask] = useState({ title: '', description: '' });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(addTask({ ...task, id: uuidv4() }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Write a task'
        name='title'
        onChange={handleInputChange}
      />
      <br />
      <br />
      <textarea
        placeholder='Write a description'
        name='description'
        onChange={handleInputChange}
      />
      <br />.
      <br />
      <button type='submit'>Save</button>
    </form>
  );
};

export default TaskForm;
