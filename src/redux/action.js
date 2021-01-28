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

const getContactsByIdRequuest = createAction(
  'contacts/GetContactsByIdRequuest',
);
const getContactsByIdSuccess = createAction('contacts/GetContactsByIdSuccess');
const getContactsByIdError = createAction('contacts/GetContactsByIdError');

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

const filterChange = createAction('contacts/changeFilter');
const modalVisible = createAction('contacts/modalVisible');

const contactsAction = {
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
  getContactsByIdSuccess,
  getContactsByIdRequuest,
  getContactsByIdError,
  modalVisible,
  saveContactsByIdRequuest,
  saveContactsByIdSuccess,
  saveContactsByIdError,
  registerUserRequuest,
  registerUserSuccess,
  registerUserError,
};
export default contactsAction;
