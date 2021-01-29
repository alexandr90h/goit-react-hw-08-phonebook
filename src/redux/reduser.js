import { createReducer } from '@reduxjs/toolkit';
import contactsAction from './action';
import { combineReducers } from 'redux';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
};

const items = createReducer([], {
  [contactsAction.fetchContactsSuccess]: (_, action) => action.payload,
  [contactsAction.addContactsSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactsAction.delContactsSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});
const itemById = createReducer(
  {},
  {
    [contactsAction.getContactsByIdSuccess]: (_, action) => action.payload,
  },
);
const isLoading = createReducer(false, {
  [contactsAction.fetchContactsRequuest]: () => true,
  [contactsAction.fetchContactsSuccess]: () => false,
  [contactsAction.fetchContactsError]: () => false,
});
const error = createReducer(null, {
  [contactsAction.fetchContactsError]: (_, action) => action.payload,
  [contactsAction.fetchContactsRequuest]: () => null,
});
const filterItems = createReducer([], {
  [contactsAction.filterContactsSuccess]: (_, action) => action.payload,
});
const filter = createReducer('', {
  [contactsAction.filterChange]: (_, action) => action.payload,
});
const modalVisible = createReducer(false, {
  [contactsAction.modalVisible]: (_, action) => action.payload,
});
const registerUser = createReducer(initialState, {
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
});
export default combineReducers({
  items,
  isLoading,
  error,
  filter,
  filterItems,
  itemById,
  modalVisible,
  registerUser,
});
