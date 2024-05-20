import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAddContact,
  requestDeleteContact,
  requestEditContact,
  requestGetContacts,
} from '../../services/contactsApi';
const apiGetUserContacts = createAsyncThunk(
  'phonebook/get',
  async (_, thunkAPI) => {
    try {
      const data = await requestGetContacts();
      return data;
    } catch (err) {
      toast.error('We are experiencing server issues. Please try again later.');
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const apiAddUserContact = createAsyncThunk(
  'phonebook/add',
  async (formData, thunkAPI) => {
    try {
      const data = await requestAddContact(formData);
      return data;
    } catch (err) {
      toast.error('We are experiencing server issues. Please try again later.');
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const apiDeleteUserContact = createAsyncThunk(
  'phonebook/delete',
  async (contactId, thunkAPI) => {
    try {
      const data = await requestDeleteContact(contactId);
      return data;
    } catch (err) {
      toast.error('We are experiencing server issues. Please try again later.');
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const apiEditUserContact = createAsyncThunk(
  'phonebook/edit',
  async (editedContact, thunkAPI) => {
    try {
      const data = await requestEditContact(editedContact);
      return data;
    } catch (err) {
      toast.error('We are experiencing server issues. Please try again later.');
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export {
  apiGetUserContacts,
  apiAddUserContact,
  apiDeleteUserContact,
  apiEditUserContact,
};
// axios.defaults.baseURL = "https://65afbd2c2f26c3f2139ba4a7.mockapi.io";

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("/contacts");
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (newContact, thunkAPI) => {
//     try {
//       const response = await axios.post("/contacts", newContact);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId, thunkAPI) => {
//     try {
//       await axios.delete(`/contacts/${contactId}`);
//       return contactId;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );