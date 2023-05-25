import { useState } from 'react';
import { FormDdata } from '../models/form.model';

const Home = () => {
   const [input, setInput] = useState<FormDdata>({
      email: '',
      password: '',
   });

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInput((prev) => ({ ...prev, [name]: value }));
      console.log(input);
   };

   return (
      <div className="loginPage">
         <h2>Login</h2>
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
            <br />
            <button type="submit">Login</button>
         </form>
      </div>
   );
};

export default Home;
