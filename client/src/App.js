import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import LandingPage from './components/shared/home/LandingPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/user/Profile';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Workouts from './components/workout/Workouts'
import WorkoutShow from './components/workout/WorkoutShow';

import Exercises from './components/exercises/Exercises';
import ExerciseShow from './components/exercises/ExerciseShow';
import StopWatch from './components/timers/StopWatch';

const App = () => (

  <>
    <MainNavbar />
    <FetchUser>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='profile' element={<Profile />} />
          <Route path='/workouts' element={<Workouts />} /> 
          <Route path='/workouts/:workoutId' element={<WorkoutShow />} />

          <Route path='/:workoutId/exercises' element={<Exercises />} />
          <Route path='/:exerciseId/exerciseShow' element={<ExerciseShow />} />
          <Route path='/stopwatch' element={<StopWatch />} />
          
     
        </Route>
        <Route path='/landingpage' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Nomatch />} />
      </Routes>
    </FetchUser>
  </>
)

export default App;
