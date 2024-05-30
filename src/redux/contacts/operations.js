import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-hot-toast';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/contacts`);
      return response.data;
    } catch (error) {
        toast.error(
        'This contact is not in your phonebook.'
      );
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts`, newContact);
      return response.data;
    } catch (error) {
      toast.error(
        'This contact is already in your phonebook.'
      );
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (updatedContact, thunkAPI) => {
    const { id, ...rest } = updatedContact;
    try {
      const response = await axios.patch(
        `/contacts/${updatedContact.id}`,
        rest
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);