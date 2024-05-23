import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from "./operations";

const INITIAL_STATE = {
  userData: null,
  token: null,
  isSignedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                return INITIAL_STATE;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
                state.isError = false;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.userData = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
                state.isError = true;
            })
            .addMatcher(
                isAnyOf(
                    register.pending,
                    logIn.pending,
                    logOut.pending
                ),
                state => {
                    state.isLoading = true;
                    state.isError = false;
                }
            )
            .addMatcher(
                isAnyOf(
                    register.rejected,
                    logIn.rejected,
                    logOut.rejected
                ),
                state => {
                    state.isLoading = false;
                    state.isError = true;
                });
        },
  });

export const authReducer = authSlice.reducer;