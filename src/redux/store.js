import { configureStore } from '@reduxjs/toolkit'
import studentReducer from "./feature/studentSlice"
import authReducer from "./feature/authSlice"

export const store = configureStore({
  reducer: {
    student: studentReducer,
    auth: authReducer
  },
})