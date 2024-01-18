// todoSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload.text,
        completed: false,
      };
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todoToEdit = state.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = newText;
      }
    },
    handleCheck: (state, action) => {
      const updatedCheckbox = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: !item.completed } 
          : item
      );
      return updatedCheckbox;
    },
  },
});

export const { addTodo, removeTodo, editTodo, handleCheck } = todoSlice.actions;

export default todoSlice.reducer;