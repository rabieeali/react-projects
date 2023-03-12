import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsyncTodos } from "../features/todos/todosSlice";

const TodoForm = () => {
  const [input, setInput] = useState();

  const dispatch = useDispatch();
  const canSave = Boolean(input) && input.trim();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addAsyncTodos({ title: input }));
    setInput("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-info bg-gradient border-0 card p-3 col-md-5 m-auto mt-3"
      autoComplete="off"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="form-control bg-white text-dark add-todos"
        type="text"
        placeholder="Add Todos ..."
      />

      <button
        className="btn btn-danger mt-3"
        type="submit"
        disabled={!canSave}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
