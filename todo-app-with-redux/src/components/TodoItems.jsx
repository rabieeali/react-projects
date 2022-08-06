import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAsyncTodos } from "../features/todos/todosSlice";
import Task from "./Task";

const TodoItems = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);

  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);

  if (loading) return <p className="display-1 text-center text-info">loading ...</p>;
  if (error) return <p className="display-1 text-center text-danger">{error}</p>;
  return (
    <>
      {todos.map((todo) => (
        <Task
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isCompeleted={todo.isCompeleted}
        />
      ))}
    </>
  );
};

export default TodoItems;
