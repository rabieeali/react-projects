import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAsyncTodos } from "../features/todos/todosSlice";
import Task from "./Task";

const TodoItems = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAsyncTodos());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p className="display-3 text-center text-info">loading ...</p>;
  if (error) return <p className="display-3 text-center text-danger">{error}</p>;
  if(!todos.length) return <p className="display-3 text-center text-danger">No Todos Yet!</p>
  return (
    <>
      {todos.map((todo) => (
        <Task
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isCompeleted={todo.isCompeleted}
        />
      )).reverse()}
    </>
  );
};

export default TodoItems;
