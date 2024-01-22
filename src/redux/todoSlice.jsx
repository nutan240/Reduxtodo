import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filter: "all",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { newText } = action.payload;
      console.log(newText,'nutan kumari');
      const todoToEdit = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      
      if (todoToEdit )  {
        todoToEdit.text = newText;
      }
    },
    handleCheck: (state, action) => {
      const updatedCheckbox = state.todos.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
      state.todos = updatedCheckbox;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const selectVisibleTodos = (state) => {
  if (state.todo.filter === "complete") {
    return state.todo.todos.filter((todo) => todo.completed);
  } else if (state.todo.filter === "incomplete") {
    return state.todo.todos.filter((todo) => !todo.completed);
  } else {
    return state.todo.todos;
  }
};

export const { addTodo, removeTodo, editTodo, handleCheck, setFilter } =
  todoSlice.actions;

export default todoSlice.reducer;
