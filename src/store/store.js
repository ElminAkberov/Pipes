import { configureStore } from "@reduxjs/toolkit";
import promptReducer from "../services/slices/promptSlice";

export const store = configureStore({
  reducer: {
    prompts: promptReducer,
  },
});

export default store;
