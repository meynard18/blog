import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '../../models/form.model';
import { RootState } from '../../app/store';
import { createUser, logInUser } from './usersAction';

interface UserState {
   loading: boolean;
   error: string | null;
   user: FormData | null;
   loggedIn: boolean;
   token: string | null;
}

const initialState: UserState = {
   loading: false,
   error: null,
   user: null,
   token: null,
   loggedIn: false,
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(createUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(
            createUser.fulfilled,
            (state, action: PayloadAction<FormData>) => {
               state.loading = false;
               state.user = action.payload;
            }
         )
         .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
         });
   },
});

export const selectUser = (state: RootState) => state.users.user;
export const selectLoading = (state: RootState) => state.users.loading;
export const selectError = (state: RootState) => state.users.error;
export const selectLoggedIn = (state: RootState) => state.users.loggedIn;

export default userSlice.reducer;
