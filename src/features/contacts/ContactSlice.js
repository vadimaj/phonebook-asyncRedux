import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  removeContact,
  addContact,
} from '../../services/apiContacts';

const initialStateContact = {
  items: [],
  status: null,
  error: null,
  filter: '',
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    const contacts = await getContacts(rejectWithValue);
    return contacts;
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async function (newContact, { rejectWithValue }) {
    const addedContact = await addContact(newContact, rejectWithValue);
    return addedContact;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (contactId, { rejectWithValue }) {
    const removedContact = await removeContact(contactId, rejectWithValue);
    console.log(removedContact);
    return removedContact.id;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContact,
  reducers: {
    filterChange(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(addNewContact.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addNewContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addNewContact.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const contactReducer = contactsSlice.reducer;

export const { filterChange } = contactsSlice.actions;
