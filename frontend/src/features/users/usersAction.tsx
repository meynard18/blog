import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FormData } from '../../models/form.model';

export const createUser = createAsyncThunk(
   'user/createUser',
   async (formData: FormData, { rejectWithValue }) => {
      try {
         const config = {
            headers: {
               'Content-Type': 'application/json',
            },
         };
         const response = await axios.post(
            'http://localhost:9090/users',
            formData,
            config
         );
         return response.data;
      } catch (error) {
         if (axios.isAxiosError(error) && error.response?.data) {
            return rejectWithValue(error.response.data);
         }
         return rejectWithValue('An error occurred.');
      }
   }
);

export const logInUser = createAsyncThunk(
   'user/logInUser',
   async (formData: FormData) => {
      try {
         const config = {
            headers: {
               'Content-Type': 'application/json',
            },
         };
         
         const response = await axios.post(
            'http://localhost:9090/userLogin',
            formData,
            config
         );

         // Get the token from the response and store it in local storage
         //  localStorage.setItem('token', response.token);

         // Set the authorization header for subsequent requests

         return response;
      } catch (error) {
         console.log('?? what is it');
         console.log(error);
         // Handle the error case
      }
   }
);
