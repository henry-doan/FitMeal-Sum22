import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Flash from '../shared/Flash';
import {TrainingConsumer} from '../.././providers/TrainingProvider';
import { Button, Form, Modal } from "react-bootstrap";
import Watch from '../timers/Watch';


const TrainingForm = ({ addTraining, id, tname, duration,  updateTraining, errors, setErrors, setAdd, setEdit }) => {
  const [training, setTrainings] = useState({ tname: '', duration: '' })
  const [isActive, setIsActive] = useState(false);
  const {trainingId, userWorkoutId} = useParams()
  const [ time, setTime ]= useState(0)

  useEffect( () => {
    if (id) {
      setTrainings({ tname, duration})
      setTime(duration)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTraining = { ...training, duration: time }
    if (id) {
      updateTraining(userWorkoutId, id, newTraining)
      setEdit(false)
    } else {
      addTraining(userWorkoutId, newTraining)
      setAdd(false)
    }
    setTrainings({ tname: '', duration: ''})
    setTime(0)
  }

  return (
    <>
      { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        : null
      }

      <h1>{ id ? "Update" : "Create" } Training</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>name</Form.Label>
          <Form.Control
            name='name'
            value={training.tname}
            onChange={(e) => setTrainings({ ...training, tname: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Watch time={time} setTime={setTime} isActive={isActive} setIsActive={setIsActive} />
        </Form.Group>
          { !isActive ? 
          <Button variant="primary" type="submit">
            Submit
          </Button>:
          <Button variant="primary" type="submit" disabled>
            Submit
          </Button>
          }
      </Form>
    </>
  )
}
const connectedTrainings =(props)=>(
  <TrainingConsumer>
  { value => <TrainingForm {...props} {...value} /> }
  </TrainingConsumer>

  )

export default connectedTrainings;
