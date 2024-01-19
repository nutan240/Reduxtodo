
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
      console.log(state , action ,'edrftyghuijkol')
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    
    editTodo: (state, action) => {
      const { newText } = action.payload;
      const todoToEdit = state.find((todo) => todo.id ===action.payload.id );
      if (todoToEdit) {
        todoToEdit.text =newText;
      }
      console.log( newText,action,"rrrrrrrrrrrrrrrrrrrrrrrr");
    },
    handleCheck: (state, action) => {
      const updatedCheckbox = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: !item.completed } 
          : item
      );
      return updatedCheckbox;
      
    },
    
    

    filterTodo: (state, action) => {
      return state.filter((todo) => {
        switch (action.payload) {
          case "complete":
            return todo.completed === true;
          case "incomplete":
            return todo.completed === false;
            case "all":
              return todo
          
        }
      });
    },
  },
});

export const { addTodo, removeTodo, editTodo, handleCheck ,filterTodo } = todoSlice.actions;

export default todoSlice.reducer;