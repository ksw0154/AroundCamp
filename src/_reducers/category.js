import { createSlice } from "@reduxjs/toolkit";
import { faCampground } from "@fortawesome/free-solid-svg-icons";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { JEJU_CAMPING_URL, JEJU_SOCAR_URL, JEJU_STORE_URL } from "../components/Oauth/AuthInfo";

const itemList = [
  { text: "캠핑장", icon: faCampground, url: JEJU_CAMPING_URL, focused: false, list: "" },
  { text: "쏘카", icon: faCarSide, url: JEJU_SOCAR_URL, focused: false, list: "" },
  { text: "기념품 가게", icon: faStore, url: JEJU_STORE_URL, focused: false, list: "" },
  { text: "즐겨 찾기", icon: faStar, url: "", focused: false, list: "" },
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
    getList: {
      reducer: (state, action) => {
        state.map((category) => {
          if (category.icon.iconName === action.payload.id) {
            category.list = action.payload.list;
          }
        });
      },
      prepare: (id, list) => {
        return { payload: { id, list } };
      },
    },

    updateStar: (state, action) => {
      state.map((category) => {
        if (category.text === "즐겨 찾기") {
          if (!Array.isArray(category.list)) {
            category.list = [action.payload];
          } else {
            if (category.list.find((cate) => cate.placeUrl === action.payload.placeUrl)) {
            } else {
              category.list.unshift(action.payload);
            }
          }
        }
      });
    },
  },
});

export const { handleFocus, getList, updateStar } = category.actions;

export default category;
