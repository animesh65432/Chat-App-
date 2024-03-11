import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    chatuser: JSON.parse(localStorage.getItem("chatuser")) || null,
  },
  reducers: {
    addtolocalstorage: (state, action) => {
      localStorage.setItem("chatuser", JSON.stringify(action.payload));
      state.chatuser = action.payload;
    },
    removethelocalstorage: (state, action) => {
      localStorage.removeItem("chatuser");
      state.chatuser = null;
    },
  },
});

export const { addtolocalstorage, removethelocalstorage } = loginSlice.actions;
export default loginSlice.reducer;
