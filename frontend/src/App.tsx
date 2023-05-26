import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import CreateBlog from './pages/CreateBlog';
import Blogs from './pages/Blogs';
import Navbar from './components/Nav';
import ProtectedRoute from './utils/PrivateRoutes';

function App() {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route element={<ProtectedRoute />}>
               <Route path="/createBlog" element={<CreateBlog />} />
            </Route>
            <Route path="/blogs" element={<Blogs />} />
         </Routes>
      </Router>
   );
}

export default App;
