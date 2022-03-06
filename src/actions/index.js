import { SIGN_IN, SIGN_OUT, ADD_TODO, DELETE_TODO, UPDATE_TODO } from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const addTodo = (message) => ({
  type: ADD_TODO,
  message,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const updateTodo = ({ message, id }) => ({
  type: UPDATE_TODO,
  message,
  id,
});
