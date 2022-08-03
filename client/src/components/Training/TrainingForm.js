import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Flash from '../shared/Flash';
import {TrainingConsumer} from '../.././providers/TrainingProvider';
import { Button, Form, Modal } from "react-bootstrap";

const TrainingForm = ({ addTraining, id, tname, duration,  updateTraining, errors, setErrors}) => {

  const [training, setTrainings] = useState({ tname: '', duration: '' })

  const {trainingId, userWorkoutId} = useParams()


  useEffect( () => {
    if (id) {
      setTrainings({ tname, duration})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTraining(userWorkoutId, id, training)
    } else {
      addTraining(userWorkoutId, training)
    }
    setTrainings({ tname: '', duration: ''})
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

              <Form.Group className="mb-3">
                <Form.Label>duration</Form.Label>
                <Form.Control
                  name='duration'
                  value={training.duration}
                  onChange={(e) => setTrainings({ ...training, duration: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>image</Form.Label>
                <Form.Control
                  name='image'
                  value={training.image}
                  onChange={(e) => setTrainings({ ...training, image: e.target.value })}
                  required
                />
              </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
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
