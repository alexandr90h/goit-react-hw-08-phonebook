import contactsAction from './action';
import * as API from '../api/api';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchContacts = () => async dispatch => {
  dispatch(contactsAction.fetchContactsRequuest());
  try {
    const contacts = await API.FetchContacts();
    console.log(contacts);
    dispatch(contactsAction.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsAction.fetchContactsError(error.message));
  }
};
export const addContacts = (name, number) => async dispatch => {
  const item = {
    name,
    number,
  };
  dispatch(contactsAction.addContactsRequuest());
  API.AddContacts(item)
    .then(({ data }) => dispatch(contactsAction.addContactsSuccess(data)))
    .catch(error => dispatch(contactsAction.addContactsError(error)));
};
export const delContacts = item => async dispatch => {
  dispatch(contactsAction.delContactsRequuest());
  API.DelContacts(item)
    .then(() => dispatch(contactsAction.delContactsSuccess(item)))
    .catch(error => dispatch(contactsAction.delContactsError(error)));
};
// export const getContactsById = item => async dispatch => {
//   dispatch(contactsAction.getContactsByIdRequuest());
//   try {
//     const contact = await API.GetContactsById(item);
//     dispatch(contactsAction.getContactsByIdSuccess(contact));
//   } catch (error) {
//     dispatch(contactsAction.getContactsByIdError(error));
//   }
// };
export const filterContacts = item => async dispatch => {
  dispatch(contactsAction.filterContactsRequuest());
  try {
    const contacts = await API.FilterContacts(item);
    dispatch(contactsAction.filterContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsAction.filterContactsError(error));
  }
};
export const saveContacts = (id, name, number) => async dispatch => {
  const item = {
    id,
    name,
    number,
  };
  dispatch(contactsAction.saveContactsByIdRequuest());
  API.SaveContacts(item)
    .then(({ data }) => dispatch(contactsAction.saveContactsByIdSuccess(data)))
    .catch(error => dispatch(contactsAction.saveContactsByIdError(error)));
};
export const registerUser = item => async dispatch => {
  dispatch(contactsAction.registerUserRequuest());
  try {
    const { data } = await API.Register(item);
    dispatch(contactsAction.registerUserSuccess(data));
  } catch (error) {
    dispatch(contactsAction.registerUserError(error));
  }
};

export const loginUser = item => async dispatch => {
  dispatch(contactsAction.loginUserRequuest());
  try {
    const { data } = await axios.post('users/login', item);
    token.set(data.token);
    dispatch(contactsAction.loginUserSuccess(data));
  } catch (error) {
    dispatch(contactsAction.loginUserError(error));
  }
};
export const logoutUser = () => async dispatch => {
  dispatch(contactsAction.logoutUserRequuest());
  try {
    await axios.post('users/logout');
    token.unset();
    dispatch(contactsAction.logoutUserSuccess());
  } catch (error) {}
};
export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.registerUser.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  },
);
