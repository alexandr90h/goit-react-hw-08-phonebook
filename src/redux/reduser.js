import { createReducer } from "@reduxjs/toolkit";
import contactsAction from "./action";
import { combineReducers } from 'redux';


const items = createReducer([], {
    [contactsAction.fetchContactsSuccess]: (_, action) => action.payload,
    [contactsAction.addContactsSuccess]: (state, action) => [...state, action.payload],
    [contactsAction.delContactsSuccess]: (state, action) => state.filter(({ id }) => id !== action.payload),
});
const itemById = createReducer({}, {
    [contactsAction.getContactsByIdSuccess]: (_, action) => action.payload
})
const isLoading = createReducer(false, {
    [contactsAction.fetchContactsRequuest]: () => true,
    [contactsAction.fetchContactsSuccess]: () => false,
    [contactsAction.fetchContactsError]: () => false,
});
const error = createReducer(null, {
    [contactsAction.fetchContactsError]: (_, action) => action.payload,
        [contactsAction.fetchContactsRequuest]:()=>null,
})
const filterItems = createReducer([], {
    [contactsAction.filterContactsSuccess]: (_, action) => action.payload,
});
const filter = createReducer('', {
    [contactsAction.filterChange]: (_, action) => action.payload
});
const modalVisible = createReducer(false, {
    [contactsAction.modalVisible]: (_, action) => action.payload
})
export default combineReducers({
    items,
    isLoading,
    error,
    filter,
    filterItems,
    itemById,
    modalVisible,
})