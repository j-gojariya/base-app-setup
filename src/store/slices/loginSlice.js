import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groups: ['HOSPITAL'],
  token: '123',
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
export const isHospital = (state) =>
  state?.loginReducer?.groups?.includes('HOSPITAL');
export const isVendor = (state) =>
  state?.loginReducer?.groups?.includes('VENDOR');

const { actions, reducer } = loginSlice;
export const { signIn } = actions;
export default reducer;
