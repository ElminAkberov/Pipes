import { createSlice } from "@reduxjs/toolkit";

const promptSlice = createSlice({
  name: "prompt",
  initialState: [],
  reducers: {
    addPrompt: (state, action) => {
      state.push({
        id: state.length, 
        prompt: action.payload, 
      });
    },
  },
});

export const { addPrompt  } = promptSlice.actions;
export default promptSlice.reducer;
