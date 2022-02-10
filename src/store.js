import { configureStore, createSlice } from "@reduxjs/toolkit";
import { faCampground } from "@fortawesome/free-solid-svg-icons";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { JEJU_CAMPING_URL, JEJU_SOCAR_URL } from "./components/Oauth/AuthInfo";

const itemList = [
  { text: "캠핑장", icon: faCampground, url: JEJU_CAMPING_URL, focused: false },
  { text: "쏘카", icon: faCarSide, url: JEJU_SOCAR_URL, focused: false },
  { text: "기념품 가게", icon: faStore, url: "", focused: false },
  { text: "즐겨 찾기", icon: faStar, url: "", focused: false },
  { text: "좋아요", icon: faHeart, url: "", focused: false },
];

const category = createSlice({
  name: "categoryReducer",
  initialState: itemList,
  reducers: {
    handleFocus: (state, action) => {
      state.filter((category) => {
        if (category.icon.iconName === action.payload) {
          category.focused = true;
        } else {
          category.focused = false;
        }
      });
      return state;
    },
  },
});

// const users = createSlice({
//   name: "usersReducer",
//   initialState: [{ id: "test", age: 23, nickname: "ABEL" }],
// });

const store = configureStore({ reducer: category.reducer });

export const { handleFocus } = category.actions;

export default store;
