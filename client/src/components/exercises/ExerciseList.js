import { ExerciseConsumer } from "../../providers/ExerciseProvider";
import { WorkoutConsumer } from "../../providers/WorkoutProvider";
import Exercise from './Exercise';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Flash from "../shared/Flash";



const ExerciseList = ({ exercises, getAllExercises, deleteExercise, errors, setErrors }) => {
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
    <Container>
   


    </Container>

     <Container>
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