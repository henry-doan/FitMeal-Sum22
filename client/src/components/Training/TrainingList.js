import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TrainingConsumer } from "../../providers/TrainingProvider";
import {  ListGroup } from "react-bootstrap";
import Training from './Training';
import Flash from '../shared/Flash';

const TrainingList = ({getAllTrainings, trainings, errors, setErrors}) => {

  const { userWorkoutId } = useParams()

  useEffect( () => {
    getAllTrainings(userWorkoutId)
  }, [])
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
    <h1>All Training</h1>
      <ListGroup variant="flush">
        { trainings.map(t => 
            <Training 
              key={t.id}
              {...t}
              catId={userWorkoutId}
            />
        )}
      </ListGroup>
      
    </>
  )
}

const connectedTrainingList = (props) => (
  <TrainingConsumer>
    { value => <TrainingList {...props} {...value} />}
  </TrainingConsumer>
)

export default connectedTrainingList;
