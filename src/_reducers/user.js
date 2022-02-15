import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "userReducer",
  initialState: {},
  reducers: {
    getUserInfo: (state, action) => {
      state.kakao = action.payload;
    },
    insertFavorite: (state, action) => {
      if (state.favorites === undefined) {
        state.favorites = [action.payload];
      }

      if (state.favorites.find((favorite) => favorite.placeUrl === action.payload.placeUrl)) {
      } else {
        state.favorites.unshift(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    getFavorites: (state, action) => {
      state.favorites = JSON.parse(localStorage.getItem("favorites"));
      state.favorites.list = state.favorites;
    },
  },
});

export const { getUserInfo, insertFavorite, getFavorites } = user.actions;

export default user;
