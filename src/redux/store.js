import { configureStore } from '@reduxjs/toolkit';
import contactsReduser from './reduser';

const store = configureStore({
   reducer:contactsReduser,
});
export default store;