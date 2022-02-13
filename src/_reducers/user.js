import { createSlice } from "@reduxjs/toolkit";

const init_info = {
  name: "Kim sangwon",
  nickName: "Abel",
  age: 23,
  email: "sangs8448@gmail.com",
  favorites: [],
};

const user = createSlice({
  name: "userReducer",
  initialState: init_info,
  reducers: {
    insertFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
  },
});

export const { insertFavorite } = user.actions;

export default user;
