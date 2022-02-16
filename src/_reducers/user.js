import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "userReducer",
  initialState: {},
  reducers: {
    getUserInfo: (state, action) => {
      state.kakao = action.payload;
    },
    insertFavorite: (state, action) => {
      if (state.favorites === undefined || state.favorites === null) {
        state.favorites = [action.payload];
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      } else if (state.favorites.find((favorite) => favorite.placeUrl === action.payload.placeUrl)) {
      } else {
        state.favorites.unshift(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter((favorite) => favorite.placeUrl !== action.payload.placeUrl);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
      state.favorites.list = state.favorites;
    },

    getFavorites: (state, action) => {
      state.favorites = JSON.parse(localStorage.getItem("favorites"));
      if (state.favorites) {
        state.favorites.list = state.favorites;
      }
    },
  },
});

export const { getUserInfo, insertFavorite, getFavorites, deleteFavorite } = user.actions;

export default user;
