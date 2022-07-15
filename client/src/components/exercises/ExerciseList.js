import { ExerciseConsumer } from "../../providers/ExerciseProvider";
import Exercise from './Exercise';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import Flash from "../shared/Flash";

const ExerciseList = ({ exercises, getAllExercises, deleteExercise, errors, setErrors }) => {
  const { workoutId } = useParams()

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
      <h1>All of -blanks- ID:{workoutId} Exercises</h1>
     <Container fluid>
      <Row>
        <Col>

        { exercises.map(n => 
            <Exercise 
              key={n.id}
              {...n}
              workoutId={workoutId}
              deleteExercise={deleteExercise}
            />
        )}
       
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

export default ConnectedExerciseList;