// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {

// }

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
 
//   },
//     extraReducers: (builder) => {
//     builder
      
//   },
// });

// export const { } = authSlice.actions

// export default authSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false },
  reducers: {
    login: (state) => { state.isAuthenticated = true; },
    logout: (state) => { state.isAuthenticated = false; }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
