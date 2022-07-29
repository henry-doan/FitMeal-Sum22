import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const TrainingContext = React.createContext()

export const TrainingConsumer = TrainingContext.Consumer

const TrainingProvider = ({children}) => {
  const [trainings, setTrainings] = useState([])
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()

  const getAllTrainings = (userWorkoutId) => {
    axios
      .get(`/api/userworkouts/${userWorkoutId}/trainings`)
      .then((res) => setTrainings(res.data))
      .catch((err) => {
        console.log(err)
        setErrors(err)
      })
  }

  const addTraining = (userWorkoutId, training) => {
    axios.post(`/api/userworkouts/${userWorkoutId}/trainings`, { training })
      .then( res => setTrainings([...trainings, res.data]))
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
  const updateTraining = (userWorkoutId, id, training) => {
    axios.put(`/api/userworkouts/${userWorkoutId}/trainings/${id}`, { training })
      .then( res => {
        const newUpdatedtraining = trainings.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setTrainings(newUpdatedtraining)
        navigate(`/${userWorkoutId}/trainings`)
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
  const deleteTraining = (userWorkoutId, id) => {
    axios.delete(`/api/userworkouts/${userWorkoutId}/trainings/${id}`)
      .then(res => {
        setTrainings(trainings.filter( t => t.id !== id))
        navigate(`/${userWorkoutId}/trainings`)
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
    <TrainingContext.Provider
      value={{
        trainings,
        errors,
        setErrors,
        getAllTrainings,
        addTraining,
        updateTraining,
        deleteTraining
      }}
    >
      {children}
    </TrainingContext.Provider>
  )
}

export default TrainingProvider
