import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/user/Profile';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Nomatch />} />
      </Routes>
    </FetchUser>
  </>
)

export default App;
