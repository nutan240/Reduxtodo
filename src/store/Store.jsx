import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../redux/todoSlice'
export const Store= configureStore({

        reducer: {
          todo: todoReducer,
        },
      
})