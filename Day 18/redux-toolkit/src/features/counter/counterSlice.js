import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({

  name: 'counter',

  initialState: {
    value1 : 0
  },

  reducers: {
    increment : (state) =>{
      state.value1 += 1;
    },
    decrement : (state) =>{
      state.value1 -= 1;
    },
    reset : (state)=>{
      state.value1 = 0
    },
    incrementByValue : (state,action)=> {
      state.value1 += Number(action.payload)
    }
  }
});


export const { increment,decrement,reset,incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
