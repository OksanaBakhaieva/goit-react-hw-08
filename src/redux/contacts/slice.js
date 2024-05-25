import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, editContact, fetchContacts } from "./operations";
import { logOut } from "../auth/operations";

const INITIAL_STATE = {
  contacts: [],
  isLoading: false,
  isError: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts[index] = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        return INITIAL_STATE;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          editContact.pending,
          logOut.pending
        ),
        state => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          editContact.rejected,
          logOut.rejected
        ),
        state => {
          state.isLoading = false;
          state.isError = true;
        });
  },
});

export const contactsReducer = contactsSlice.reducer;
