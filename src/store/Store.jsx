import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../todo/todoSlice'
export const Store= configureStore({
    reducer: todoReducer
})