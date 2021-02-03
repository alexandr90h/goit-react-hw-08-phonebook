import { createReducer } from '@reduxjs/toolkit';
import contactsAction from './action';
import * as operation from '../redux/operation';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
};
const authUser = createReducer(initialState, {
  [contactsAction.registerUserSuccess]: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  },
  [contactsAction.loginUserSuccess]: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  },
  [contactsAction.logoutUserSuccess]: (state, _) => {
    state.user = initialState.user;
    state.token = initialState.token;
    state.isLoggedIn = initialState.isLoggedIn;
  },
  [operation.fetchCurrentUser.fulfilled]: (state, action) => {
    state.user.name = action.payload.name;
    state.isLoggedIn = true;
  },
});
export default authUser;
