import { useState } from 'react';
import { FormData } from '../models/form.model';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/users/usersSlice';
import { Dispatch } from '@reduxjs/toolkit';

const SignUp = () => {
   const dispatch: Dispatch = useDispatch();

   const [input, setInput] = useState<FormData>({
      email: '',
      password: '',
      confirmPassword: '',
   });

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInput((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('hi there');
      dispatch(createUser(input));
   };
   return (
      <div className="signUpPage">
         <h2>Sign Up</h2>
         <form action="" className="loginForm" onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Email Address"
               value={input.email}
               name="email"
               onChange={handleInputChange}
            />
            <br />
            <input
               onChange={handleInputChange}
               type="text"
               placeholder="Password"
               value={input.password}
               name="password"
            />
            <input
               onChange={handleInputChange}
               type="text"
               placeholder="Confirm Password"
               value={input.confirmPassword}
               name="confirmPassword"
            />
            <br />
            <button type="submit">Login</button>
         </form>
      </div>
   );
};

export default SignUp;
