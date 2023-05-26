import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/usersSlice';

const store = configureStore({
   reducer: {
      users: userReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
