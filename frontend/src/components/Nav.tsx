import { Link } from 'react-router-dom';
const auth = {
   token: false, // Set to true if the token is valid
};

const Nav = () => {
   return (
      <div>
         <nav className="navbar">
            <h1>ProJ Logo</h1>
            <ul className="navbar-ul">
               {!auth.token && (
                  <>
                     <li>
                        <Link className="navbar-link" to="/">
                           LogIn
                        </Link>
                     </li>
                     <li>
                        <Link className="navbar-link" to="/signUp">
                           SignUp
                        </Link>
                     </li>
                  </>
               )}
               <li>
                  <Link className="navbar-link" to="/createBlog">
                     Write Blog
                  </Link>
               </li>
               <li>
                  <Link className="navbar-link" to="/blogs">
                     Blogs
                  </Link>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Nav;
