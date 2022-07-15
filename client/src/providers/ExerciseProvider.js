import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ExerciseContext = React.createContext();

export const ExerciseConsumer = ExerciseContext.Consumer;

const ExerciseProvider = ({ children }) => {
  const [exercises, setExercises] = useState([])
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()

  const getAllExercises = (workoutId) => {
    axios.get(`/api/workouts/${workoutId}/exercises`)
      .then( res => setExercises(res.data))
      .catch( err => {
        console.log(err)
        setErrors({
          variant: 'danger',
          msg: err.response.statusText
        })
      })
  }

  const addExercise = (workoutId, exercise) => {
    axios.post(`/api/workouts/${workoutId}/exercises`, { exercise })
      .then( res => setExercises([...exercises, res.data]))
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

  const updateExercise = (workoutId, id, exercise) => {
    axios.put(`/api/workouts/${workoutId}/exercises/${id}`, { exercise })
      .then( res => {
        const newUpdatedExercises = exercises.map( n => {
          if (n.id === id) {
            return res.data
          }
          return n
        })
        setExercises(newUpdatedExercises)
        navigate(`/${workoutId}/exercises`)
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

  const deleteExercise = (workoutId, id) => {
    axios.delete(`/api/workouts/${workoutId}/exercises/${id}`)
      .then(res => {
        setExercises(exercises.filter( n => n.id !== id))
        navigate(`/${workoutId}/exercises`)
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
    <ExerciseContext.Provider value={{
      exercises, 
      errors, 
      setErrors,
      getAllExercises,
      addExercise,
      updateExercise,
      deleteExercise, 
    }}>
      { children }
    </ExerciseContext.Provider>
  )
}

export default ExerciseProvider;