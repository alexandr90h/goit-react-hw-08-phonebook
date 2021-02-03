import { createReducer } from '@reduxjs/toolkit';
import contactsAction from './action';
import { combineReducers } from 'redux';
import * as operation from './operation';

const items = createReducer([], {
  [contactsAction.fetchContactsSuccess]: (state, action) =>
    (state = action.payload),
  [contactsAction.addContactsSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactsAction.delContactsSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
  [contactsAction.getContactsById]: (state, action) =>
    state.filter(({ id }) => id === action.payload),
  [contactsAction.filterItems]: (state, action) =>
    state.filter(({ name }) => {
      return name.toLowerCase().includes(action.payload);
    }),
});

const itemById = createReducer(null, {
  [contactsAction.getContactsById]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [operation.fetchCurrentUser.pending]: () => true,
  [operation.fetchCurrentUser.fulfilled]: () => false,
  [operation.fetchCurrentUser.rejected]: () => false,
});
const error = createReducer(null, {
  [contactsAction.fetchContactsError]: (_, action) => action.payload,
  [contactsAction.fetchContactsRequuest]: () => null,
});
const filterName = createReducer('', {
  [contactsAction.filterContactsName]: (_, action) => action.payload,
});
const modalVisible = createReducer(false, {
  [contactsAction.modalVisible]: (_, action) => action.payload,
});
const filterItems = createReducer([], {});
export default combineReducers({
  filterItems,
  items,
  isLoading,
  error,
  filterName,
  itemById,
  modalVisible,
});
