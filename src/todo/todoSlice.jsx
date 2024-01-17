import { createSlice , nanoid } from "@reduxjs/toolkit";

export const todoSlice =createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload.text,
            };
              state.push(newTodo);
          },
       
    }
})

export const {addTodo ,removeTodo}=todoSlice.actions

export default todoSlice.reducer