import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAsyncTodos, isTodoDone } from "../features/todos/todosSlice";

const Task = ({ title, id, isCompeleted }) => {
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteAsyncTodos({ id }));
  };

  const toggleTodo = (e) => {
    setDone(e.target.checked);
    dispatch(isTodoDone({ id, title, isCompeleted: !isCompeleted }));
  };

  return (
    <div id={id} className="shadow-lg rounded m-auto col-md-5 p-3 my-3">
      <div className="d-flex justify-content-between">
        <div className="flex">
          <input
            id={title}
            onChange={(e, id) => toggleTodo(e, id)}
            className="form-check-input px-1"
            type="checkbox"
          />
          <label
            htmlFor={title}
            className={`mx-2 fw-bold text-capitalize text-secondary ${
              done ? "text-decoration-line-through" : ""
            }`}
          >
            {title}
          </label>
        </div>
        <h6>
          {isCompeleted ? (
            <i className="fa fa-check text-success"></i>
          ) : (
            <i className="fa fa-hourglass text-warning"></i>
          )}
        </h6>
      </div>
      <i onClick={() => deleteHandler(id)} className="text-red fs-5 mt-3 fa fa-trash">
       
      </i>
    </div>
  );
};

export default Task;
