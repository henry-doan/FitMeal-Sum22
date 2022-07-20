import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const TrainingContext = React.createContext()

export const TrainingConsumer = TrainingContext.Consumer

const TrainingProvider = (children) => {
  const [trainings, setTrainings] = useState([])
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()
  const getAllTrainings = () => {
    axios
      .get('/api/trainings')
      .then((res) => setTrainings(res.data))
      .catch((err) => {
        console.log(err)
        setErrors(err)
      })
  }
  return (
    <TrainingContext.Provider
      value={{
        trainings,
        errors,
        setErrors,
        getAllTrainings,
      }}
    >
      {children}
    </TrainingContext.Provider>
  )
}

export default TrainingProvider
