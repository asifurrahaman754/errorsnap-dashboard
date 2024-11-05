import { createSlice } from "@reduxjs/toolkit";
import { user } from "types/user";

export interface authState {
  user: user;
  isLoading: boolean;
}

const initialState: authState = {
  user: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setUserLoading } = authSlice.actions;

export default authSlice.reducer;
