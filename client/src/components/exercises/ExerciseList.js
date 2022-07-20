import { ExerciseConsumer } from "../../providers/ExerciseProvider";
import { WorkoutConsumer } from "../../providers/WorkoutProvider";
import Exercise from './Exercise';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Col, Container, ListGroup, Row, Card } from 'react-bootstrap';
import Flash from "../shared/Flash";
import {useState} from 'react';

import axios from 'axios';

const ExerciseList = ({ workouts, getAllWorkouts, exercises, getAllExercises, deleteExercise, errors, setErrors }) => {
  const {workoutId} = useParams()

  useEffect( () => {
    getAllExercises(workoutId)
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

     <Container fluid>
      <Row>
        <Col>

        { exercises.map((n) => ( 
            <Exercise 
              key={n.id}
              {...n}
              workoutId={workoutId}
              deleteExercise={deleteExercise}
            />
            
        ))}
       
        </Col>
      </Row>
      </Container>
    </>
  )
}



const ConnectedExerciseList = (props) => (
  <ExerciseConsumer>
    { value => <ExerciseList {...props} {...value} />}
  </ExerciseConsumer>
)

const ConnectedWorkoutList = (props) => (
  <WorkoutConsumer>
    { value => <ConnectedExerciseList {...props} {...value} />}
  </WorkoutConsumer>
)

export default ConnectedWorkoutList;