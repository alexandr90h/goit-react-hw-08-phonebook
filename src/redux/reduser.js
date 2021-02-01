import { createReducer } from '@reduxjs/toolkit';
import contactsAction from './action';
import { combineReducers } from 'redux';

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
  // [contactsAction.filterContactsName]: (state, action) =>
  //   state.filter(({ name }) => name.toLowerCase().includes(action.payload)),
});

const itemById = createReducer(null, {
  [contactsAction.getContactsById]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [contactsAction.fetchContactsRequuest]: () => true,
  [contactsAction.fetchContactsSuccess]: () => false,
  [contactsAction.fetchContactsError]: () => false,
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
export default combineReducers({
  items,
  isLoading,
  error,
  filterName,
  itemById,
  modalVisible,
});
