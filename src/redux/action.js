import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequuest = createAction('contacts/fetchContactsRequuest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactsRequuest = createAction('contacts/addContactsRequuest');
const addContactsSuccess = createAction('contacts/addContactsSuccess');
const addContactsError = createAction('contacts/addContactsError');

const delContactsRequuest = createAction('contacts/delContactsRequuest');
const delContactsSuccess = createAction('contacts/delContactsSuccess');
const delContactsError = createAction('contacts/delContactsError');

const filterContactsRequuest = createAction('contacts/filterContactsRequuest');
const filterContactsSuccess = createAction('contacts/filterContactsSuccess');
const filterContactsError = createAction('contacts/filterContactsError');

const saveContactsByIdRequuest = createAction(
  'contacts/saveContactsByIdRequuest',
);
const saveContactsByIdSuccess = createAction(
  'contacts/saveContactsByIdSuccess',
);
const saveContactsByIdError = createAction('contacts/saveContactsByIdError');

const registerUserRequuest = createAction('contacts/registerUserRequuest');
const registerUserSuccess = createAction('contacts/registerUserSuccess');
const registerUserError = createAction('contacts/registerUserError');

const loginUserRequuest = createAction('contacts/loginUserRequuest');
const loginUserSuccess = createAction('contacts/loginUserSuccess');
const loginUserError = createAction('contacts/loginUserError');

const logoutUserRequuest = createAction('contacts/logoutUserRequuest');
const logoutUserSuccess = createAction('contacts/logoutUserSuccess');
const logoutUserError = createAction('contacts/logoutUserError');

const fetchCurrentUserRequuest = createAction(
  'contacts/fetchCurrentUserRequuest',
);
const fetchCurrentUserSuccess = createAction(
  'contacts/fetchCurrentUserSuccess',
);

const fetchCurrentUserError = createAction('contacts/fetchCurrentUserError');
const getContactsById = createAction('contacts/GetContactsById');
const filterChange = createAction('contacts/changeFilter');
const modalVisible = createAction('contacts/modalVisible');

//---------------------------------------------------------------

const contactsAction = {
  fetchCurrentUserRequuest,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
  getContactsById,
  logoutUserError,
  logoutUserSuccess,
  logoutUserRequuest,
  loginUserRequuest,
  loginUserSuccess,
  loginUserError,
  fetchContactsRequuest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequuest,
  addContactsSuccess,
  addContactsError,
  delContactsRequuest,
  delContactsSuccess,
  delContactsError,
  filterContactsRequuest,
  filterContactsSuccess,
  filterContactsError,
  filterChange,
  modalVisible,
  saveContactsByIdRequuest,
  saveContactsByIdSuccess,
  saveContactsByIdError,
  registerUserRequuest,
  registerUserSuccess,
  registerUserError,
};
export default contactsAction;
