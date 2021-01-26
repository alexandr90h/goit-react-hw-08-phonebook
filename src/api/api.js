import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export async function FetchContacts() {
  const { data } = await axios.get("/contacts/");
  return data;
}
export async function AddContacts(item) {
  return await axios.post("/contacts/", item);
}
export async function DelContacts(item) {
  return await axios.delete(`/contacts/${item}`);
}
export async function FilterContacts(item) {
  const { data } = await axios.get(`/contacts?q=${item}`);
  return data;
}
export async function GetContactsById(item) {
  const {data}= await axios.get(`/contacts/${item}`);
  return data;
}
export async function SaveContacts(item) {
  return await axios.patch(`/contacts/${item.id}/`, item);
}
