import { useDispatch, useSelector } from "react-redux";
import { add_todo } from "../actions";

const todosSelector = (state: any) => state.TodoReducer.todos;

const useApp = () => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  const Actions = {
    add: (data: {}) => {
      dispatch(add_todo(data))
    }
  };

  return {
    todos,
    Actions,
  }
};

export default useApp
