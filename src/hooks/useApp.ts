import { useDispatch, useSelector } from "react-redux";
import { add_todo } from "actions";
import { useState } from "react";

const todosSelector = (state: any) => state.TodoReducer.todos;

const useApp = () => {
  const [query, set_query] = useState('');
  const todos = useSelector(todosSelector);
  /*
    hooksでのreduxの値を更新する時や値を取得する時に
    dispatchを使うことを忘れないようにする
  */
  const dispatch = useDispatch();

  const Actions = {
    add: async () => {
      try {
        dispatch(add_todo({ title: query }))
      } catch (e) {
        console.log(e)
      }
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    Actions.add()
  };

  return {
    todos,
    onSubmit,
    set_query,
  }
};

export default useApp
