import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groups: [],
  token: null,
  userData: null,
};
/* eslint-disable */
const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    signIn: (state, { payload }) => {
      state.token = payload.token;
      state.groups = payload.groups;
      state.userData = payload.userData;
    },
  },
});

export const getCurrentToken = (state) => state?.loginReducer?.token;
export const getUserData = (state) => state?.loginReducer?.userData;
export const isHospital = (state) =>
  state?.loginReducer?.groups?.includes('HOSPITAL');
export const isVendor = (state) =>
  state?.loginReducer?.groups?.includes('VENDOR');
export const isAdmin = (state) =>
  state?.loginReducer?.groups?.includes('ADMIN');
const { actions, reducer } = loginSlice;
export const { signIn } = actions;
export default reducer;
