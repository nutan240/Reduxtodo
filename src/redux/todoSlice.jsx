import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  filter: localStorage.getItem("filter") || "all",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      const { newText } = action.payload;
      const todoToEdit = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (todoToEdit) {
        todoToEdit.text = newText;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    handleCheck: (state, action) => {
      const updatedCheckbox = state.todos.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
      state.todos = updatedCheckbox;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      localStorage.setItem("filter", action.payload);
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
