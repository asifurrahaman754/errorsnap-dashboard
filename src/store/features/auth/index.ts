import { createSlice } from "@reduxjs/toolkit";
import { user } from "types/user";

export interface authState {
  user: user;
  isInitialized: boolean;
}

const initialState: authState = {
  user: null,
  isInitialized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isInitialized = true;
    },
    setUserLoading: (state) => {
      state.isInitialized = false;
    },
  },
});

export const { setUser, setUserLoading } = authSlice.actions;

export default authSlice.reducer;
