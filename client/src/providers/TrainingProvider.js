import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const TrainingContext = React.createContext()

export const TrainingConsumer = TrainingContext.Consumer

const TrainingProvider = ({children}) => {
  const [trainings, setTrainings] = useState([])
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()

  const getAllTrainings = () => {
    axios
      .get('/api/userworkouts/:userworkout_id/trainings')
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


  return (
    <TrainingContext.Provider
      value={{
        trainings,
        errors,
        setErrors,
        getAllTrainings,
        addTraining,
      }}
    >
      {children}
    </TrainingContext.Provider>
  )
}

export default TrainingProvider
