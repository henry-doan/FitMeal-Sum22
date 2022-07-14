import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const ExerciseContext = React.createContext()

export const ExerciseConsumer = ExerciseContext.Consumer

const ExerciseProvider = ({ children }) => {
  const [exercises, setExercises] = useState([])
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()

  const getAllExercises = (workoutId) => {
    axios
      .get(`/api/workouts/${workoutId}/exercises`)
      .then((res) => setExercises(res.data))
      .catch((err) => {
        console.log(err)
        setErrors({
          variant: 'danger',
          msg: err.response.statusText,
        })
      })
  }
  return <ExerciseContext.Provider value={{
    exercises,
    errors, 
    setErrors,
    getAllExercises
  }}>
  {children}
  </ExerciseContext.Provider>
}

export default ExerciseProvider;
