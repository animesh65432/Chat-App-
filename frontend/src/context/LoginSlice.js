import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    chatuser: localStorage.getItem("chatuser") || null,
  },
  reducers: {
    addtolocalstorage: (state, action) => {
      localStorage.setItem("chatuser", action.payload);
      state.chatuser = action.payload;
    },
  },
});

export const { addtolocalstorage } = loginSlice.actions;
export default loginSlice.reducer;
