import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { FormData } from '../../models/form.model';
import { RootState } from '../../app/store';

interface UserState {
   loading: boolean;
   error: string | null;
   user: FormData | null;
}

const initialState: UserState = {
   loading: false,
   error: null,
   user: null,
};

export const createUser = createAsyncThunk(
   'user/createUser',
   async (formData: FormData, { rejectWithValue }) => {
      try {
         const response = await axios.post(
            'http://localhost:9090/users',
            formData
         );
         return response.data;
      } catch (error: any) {
         //  return rejectWithValue(error.response.data);
         if (error.response && error.response.data) {
            return rejectWithValue(error.response.data);
         }
         return rejectWithValue('An error occurred.');
      }
   }
);

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

export default userSlice.reducer;
