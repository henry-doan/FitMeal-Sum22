import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/user/Profile';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Workouts from './components/workout/Workouts'
import WorkoutShow from './components/workout/WorkoutShow';
import WorkoutForm from './components/workout/WorkoutForm';
import { useState } from 'react';
import Exercises from './components/exercises/Exercises'

const App = () => (

  <>
    <MainNavbar />
    <FetchUser>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='profile' element={<Profile />} />
          {<Route path='/workouts' element={<Workouts />} /> }

          <Route path='/:id/updateWorkout' element={<WorkoutForm />} />
          <Route path='/:workoutId/exercises' element={<Exercises />} />
          <Route path='/workouts/:id' element={<WorkoutShow />} />
          
     { /*<Route path='/:workoutId/exercises' element={<Exercises />} /> */} 
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Nomatch />} />
      </Routes>
    </FetchUser>
  </>
)

export default App;
