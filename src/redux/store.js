import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from '../features/contacts/ContactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
