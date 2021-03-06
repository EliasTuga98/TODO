import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList:[]
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      //current state and action executed
      saveTodo:(state,action)=>{
            state.todoList.push(action.payload)
      }
  }
});

export const { saveTodo } = todoSlice.actions

export const selectTodoList = (state) =>state.todos.todoList

export default todoSlice.reducer