import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const WorkoutContext = React.createContext()

export const WorkoutConsumer = WorkoutContext.Consumer;

const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([])
  const [allWorkouts, setAllWorkouts] = useState([])
  const [pagination, setPagination] = useState(1)
  const [headers, setHeaders] = useState({})
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()


  const getAllWorkouts = () => {
    axios.get(`/api/workout_all`)
    .then(res => {
      const { data } = res 
      setAllWorkouts(data)
    })
    .catch( err => {
      console.log(err)
      setErrors({
        variant: 'danger',
        msg: err.response.statusText
      })
    })
  }

  const getWorkouts = (page = 1) => {
    axios.get(`/api/workouts?page=${page}`)
    .then( res => {
      const { headers, data } = res 
      const totalPages = Math.ceil(headers['x-total'] / headers['x-per-page'])
      setPagination(totalPages)
      setWorkouts(data)
      setHeaders(headers)
    })
      .catch( err => {
        console.log(err)
        setErrors({
          variant: 'danger',
          msg: err.response.statusText
        })
      })
  }

  const addWorkout = (workout) => {
    axios.post('/api/workouts', { workout })
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
    axios.put(`/api/workouts/${id}`, { workout })
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
      allWorkouts,
      pagination,
      headers,
      errors,
      setErrors,
      getWorkouts,
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