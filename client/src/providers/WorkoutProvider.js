import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const WorkoutContext = React.createContext()

export const WorkoutConsumer = WorkoutContext.Consumer;

const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([])
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()

  const getAllWorkouts = () => {
    axios.get('/api/workouts')
      .then( res => setWorkouts(res.data) )
      .catch( err => {
        console.log(err)
        setErrors({
          variant: 'danger',
          msg: err.response.statusText
        })
      })
  }

  const addWorkout = (workout) => {
    let data = new FormData();
    data.append('file', workout.wimage);
    data.append('wname', workout.wname);
    axios.post('/api/workouts', data )
      .then( res => setWorkouts([...workouts, res.data ]))
      .catch( err => {
        console.log(err)
        let field = Object.keys(err.response.data.errors)[0]
        let errMsg = Object.values(err.response.data.errors)[0]
        setErrors({
          variant: 'danger',
          msg: `${field} ${errMsg}`
        })
      })
  }

  const updateWorkout = (id, workout) => {
    let data = new FormData();
    data.append('file', workout.wimage);
    data.append('wname', workout.wname);
    axios.put(`/api/workouts/${id}`, data )
      .then( res => {
        const newUpdateWorkouts = workouts.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setWorkouts(newUpdateWorkouts)
        navigate('/workouts')
      })
      .catch( err => {
        console.log(err)
        let field = Object.keys(err.response.data.errors)[0]
        let errMsg = Object.values(err.response.data.errors)[0]
        setErrors({
          variant: 'danger',
          msg: `${field} ${errMsg}`
        })
      })
  }

  
  const deleteWorkout = (id) => {
    axios.delete(`/api/workouts/${id}`)
      .then( res => {
        setWorkouts(workouts.filter( c => c.id !== id ))
        navigate('/workouts')
      })
      .catch( err => {
        console.log(err)
        setErrors({
          variant: 'danger',
          msg: err.response.statusText
        })
      })
  }

  return (
    <WorkoutContext.Provider value={{
      workouts,
      errors,
      setErrors,
      getAllWorkouts,
      addWorkout,
      updateWorkout,
      deleteWorkout,
    }}>
      { children }
    </WorkoutContext.Provider>
  )
}

export default WorkoutProvider;