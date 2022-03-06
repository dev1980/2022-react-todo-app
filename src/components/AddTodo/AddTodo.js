import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions';
import cuid from 'cuid';

const AddTodo = () => {
  const [tasks, setTasks] = useState('');
  const dispatch = useDispatch();
  function handleInput(e) {
    setTasks(e.target.value);
    console.log(tasks);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo({ task: tasks, id: cuid() }));
    e.target.userInput.value = '';
    console.log(tasks);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="userInput" onChange={(e) => handleInput(e)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
