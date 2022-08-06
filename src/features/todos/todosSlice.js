import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "http://localhost:3001/todos";

// get request
export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(base_url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// post request

export const addAsyncTodos = createAsyncThunk(
  "todos/addAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(base_url, {
        id: nanoid(),
        title: payload.title,
        isCompeleted: false,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

// put request

export const toggleIsCompeletedAsyncTodos = createAsyncThunk(
  "todos/toggleIsCompeletedAsyncTodos",
  async (payload, rejectWithValue) => {
    try {
      const response = await axios.put(`${base_url}/${payload.id}`, {
        id: nanoid(),
        title: payload.title,
        isCompeleted: payload.isCompeleted,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

// delete request

export const deleteAsyncTodos = createAsyncThunk(
  "todos/deleteAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      await axios.delete(`${base_url}/${payload.id}`);

      return { id: payload.id };
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload.title,
        isCompeleted: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodos: (state, action) => {
      const filtered = state.todos.filter((el) => el.id !== action.payload.id);
      state.todos = filtered;
    },
    isTodoDone: (state, action) => {
      const changedTodo = state.todos.find((t) => t.id === action.payload.id);
      changedTodo.isCompeleted = !changedTodo.isCompeleted;
    },
  },
  extraReducers: {
    // success
    [getAsyncTodos.fulfilled]: (state, action) => {
      return { ...state, todos: action.payload, loading: false, error: null };
    },
    // loading
    [getAsyncTodos.pending]: (state, action) => {
      return { ...state, todos: [], loading: true, error: null };
    },
    // error
    [getAsyncTodos.rejected]: (state, action) => {
      return {
        ...state,
        todos: [],
        loading: false,
        error: action.payload.message,
      };
    },
    // add todos
    [addAsyncTodos.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
    // toggle compeleted todos
    [toggleIsCompeletedAsyncTodos.fulfilled]: (state, action) => {
      const selectedTodo = state.todos.find(
        (el) => el.id === action.payload.id
      );
      selectedTodo.isCompeleted = !selectedTodo.isCompeleted;
    },
    // delete todos
    [deleteAsyncTodos.fulfilled]: (state, action) => {
      const newTodos = state.todos.filter((el) => el.id !== action.payload.id);
      state.todos = newTodos;
    },
  },
});

export const { addTodos, deleteTodos, isTodoDone } = todosSlice.actions;

export default todosSlice.reducer;
