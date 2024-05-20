import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  apiAddUserContact,
  apiDeleteUserContact,
  apiEditUserContact,
  apiGetUserContacts,
} from './operations';
import { apiLogoutUser } from '../auth/operations';

const INITIAL_STATE = {
  contacts: null,
  isLoading: false,
  isError: false,
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(apiGetUserContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(apiAddUserContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(apiDeleteUserContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(apiEditUserContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts[index] = action.payload;
      })
      .addCase(apiLogoutUser.fulfilled, () => {
        return INITIAL_STATE;
      })

      .addMatcher(
        isAnyOf(
          apiGetUserContacts.pending,
          apiAddUserContact.pending,
          apiDeleteUserContact.pending,
          apiEditUserContact.pending,
          apiLogoutUser.pending
        ),
        state => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetUserContacts.rejected,
          apiAddUserContact.rejected,
          apiDeleteUserContact.rejected,
          apiEditUserContact.rejected,
          apiLogoutUser.rejected
        ),
        state => {
          state.isLoading = false;
          state.isError = true;
        }
      ),
});

export const phonebookReducer = phonebookSlice.reducer;

// import { createSelector, createSlice } from '@reduxjs/toolkit';
// import { addContact, deleteContact, fetchContacts } from './operations';
// import { selectNameFilter } from './filtersSlice';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(addContact.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.items = state.items.filter(
//           contact => contact.id !== action.payload
//         );
//       });
//   },
// });

// const selectContacts = state => state.contacts.items;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, filter) => {
//     if (filter.length > 0) {
//       return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filter.trim().toLowerCase())
//       );
//     } else {
//       return contacts;
//     }
//   }
// );

// export const selectIsLoading = state => state.contacts.loading;

// export const selectError = state => state.contacts.error;

// export const contactsReducer = contactsSlice.reducer;