export const ADD_TODO = 'ADD_TODO';

export const add_todo = (data: {}) => ({
  type: ADD_TODO,
  payload: { data: data }
});

