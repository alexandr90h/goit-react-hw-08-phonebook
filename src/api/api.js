import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function FetchContacts() {
  const { data } = await axios.get('contacts');
  return data;
}
export async function AddContacts(item) {
  return await axios.post('contacts', item);
}
export async function DelContacts(item) {
  return await axios.delete(`contacts/${item}`);
}
export async function FilterContacts(item) {
  const { data } = await axios.get(`/contacts?q=${item}`);
  return data;
}
export async function SaveContacts(item, namNum) {
  return await axios.patch(`contacts/${item}`, namNum);
}
export async function Register(item) {
  const { data } = await axios.post('users/signup', item);
  token.set(data.token);
  return data;
}
