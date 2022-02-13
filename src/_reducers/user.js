import { createSlice } from "@reduxjs/toolkit";

const init_info = {
  name: "Kim sangwon",
  nickName: "Abel",
  age: 23,
  email: "sangs8448@gmail.com",
};

const user = createSlice({
  name: "userReducer",
  initialState: init_info,
  reducers: {},
});

export default user;
