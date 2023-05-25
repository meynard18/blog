import { useState } from 'react';
import { FormDdata } from '../models/form.model';

const SignUp = () => {
   const [input, setInput] = useState<FormDdata>({
      email: '',
      password: '',
      confirmPassword: '',
   });

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInput((prev) => ({ ...prev, [name]: value }));
      console.log(input);
   };
   return (
      <div className="signUpPage">
         <h2>Sign Up</h2>
         <form action="" className="loginForm">
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
