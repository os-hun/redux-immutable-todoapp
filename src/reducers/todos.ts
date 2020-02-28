import { ADD_TODO } from 'actions';
import { Reducer } from 'redux';
import { List, Map } from 'immutable';

const INITIAL_STATE = {
  todos: List(),
};

const TodoReducer: Reducer<any, any> = (
  state = INITIAL_STATE,
  action
) => {
  const todos = state.todos;

  switch (action.type) {
    case ADD_TODO:
      const { text } = action.payload.data;
      return {
        ...state,
        todos: todos.push(
          Map({
            text
          })
        )
      };
    default:
      return state
  }
};

export default TodoReducer
