import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import postSlice from "./postSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
    //? COMPLETED add more slices here for posts
  },
});

export default store;
