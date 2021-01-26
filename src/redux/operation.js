import contactsAction from "./action";
import * as API from '../api/api'


export const fetchContacts = () => async dispatch => {
    dispatch(contactsAction.fetchContactsRequuest());
    try {
        const contacts = await API.FetchContacts();
        dispatch(contactsAction.fetchContactsSuccess(contacts));
    } catch (error) {
        dispatch(contactsAction.fetchContactsError(error.message))
    }
}
export const addContacts = (name, number) => async dispatch => {
    const item = {
        name,
        number,
    }
    dispatch(contactsAction.addContactsRequuest());
    API.AddContacts(item).then(({ data }) => dispatch(contactsAction.addContactsSuccess(data))).catch(error => dispatch(contactsAction.addContactsError(error)));
}
export const delContacts = (item) => async dispatch => {
    dispatch(contactsAction.delContactsRequuest());
    API.DelContacts(item).then(() => dispatch(contactsAction.delContactsSuccess(item))).catch(error => dispatch(contactsAction.delContactsError(error)));
}
export const getContactsById = (item) => async dispatch => {
    dispatch(contactsAction.getContactsByIdRequuest());
    try {
        const contact = await API.GetContactsById(item);
        dispatch(contactsAction.getContactsByIdSuccess(contact));
    } catch (error) {
        dispatch(contactsAction.getContactsByIdError(error))
    }
}
export const filterContacts = (item) => async dispatch => {
    dispatch(contactsAction.filterContactsRequuest);
    try {
        const contacts = await API.FilterContacts(item);
        dispatch(contactsAction.filterContactsSuccess(contacts));
    } catch (error) {
        dispatch(contactsAction.filterContactsError(error));
    }
}
export const saveContacts = (id,name,number) => async dispatch => {
    const item = {
        id,
        name,
        number,
    }
    dispatch(contactsAction.saveContactsByIdRequuest());
    API.SaveContacts(item).then(({ data }) => dispatch(contactsAction.saveContactsByIdSuccess(data))).catch(error => dispatch(contactsAction.saveContactsByIdError(error)));
}
