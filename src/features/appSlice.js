import {  createSlice } from '@reduxjs/toolkit';


// const initialState = {
//   value: 0,
//   status: 'idle',
// };




export const appSlice = createSlice({
  name: 'app',
  initialState:{
    value:0,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  
  
});

export const { incrementByAmount } = appSlice.actions;

export const selectapp = (state) => state.app.value;



export default appSlice.reducer;
