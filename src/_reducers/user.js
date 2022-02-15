import { createSlice } from "@reduxjs/toolkit";

const init_info = {
  kakaoInfo: {},
  favorites: [],
};

const user = createSlice({
  name: "userReducer",
  initialState: init_info,
  reducers: {
    getUserInfo: (state, action) => {
      if (action.payload) {
        state.kakaoInfo.id = action.payload.id;
        state.kakaoInfo.email = action.payload.kakao_account.email;
        state.kakaoInfo.nickName = action.payload.kakao_account.profile.nickname;
        state.kakaoInfo.thumbnail = action.payload.kakao_account.profile.thumbnail_image_url;
        state.favorites = action.payload.favorites;
      }
    },
    insertFavorite: (state, action) => {
      if (state.favorites === undefined) {
        state.favorites = [action.payload];
      }

      if (state.favorites.find((favorite) => favorite.placeUrl === action.payload.placeUrl)) {
      } else {
        state.favorites.unshift(action.payload);
      }
    },
  },
});

export const { getUserInfo, insertFavorite } = user.actions;

export default user;
