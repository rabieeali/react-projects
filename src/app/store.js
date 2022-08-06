import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
import todosReducer from "../features/todos/todosSlice";
export const store = configureStore({
  
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});
