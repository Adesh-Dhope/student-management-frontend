// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../redux/slices/studentSlice";

const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

export default store;
