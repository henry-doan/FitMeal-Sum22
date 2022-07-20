import { useState } from 'react';
import { Modal, Button, Container } from 'react-bootstrap';
import { ExerciseConsumer } from "../../providers/ExerciseProvider";
import { WorkoutConsumer } from "../../providers/WorkoutProvider";
import ExerciseForm from './ExerciseForm';


import ExerciseList from './ExerciseList';

const Exercises = ({  workoutId, exercises, }) => {
  const [adding, setAdd] = useState(false)

  return(
    <>

    <h3> All of  Exercise's </h3>
    <br/> 
    

    <Container>
     <h1>Exercise Form</h1>
    <Button onClick={() => setAdd(true)}>Add Exercises+</Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <ExerciseForm
          setAdd={setAdd}
          workoutId={workoutId}
        />

      </Modal.Body>

      </Modal>

   
      <h1>Exercise List</h1>
      <ExerciseList
       exercises={exercises}/>

    </Container>


    </>
  )
}




const ConnectedExercises = (props) => (
  <ExerciseConsumer>
    { value => <Exercises {...props} {...value} />}
  </ExerciseConsumer>
)

const ConnectedWorkouts = (props) => (
  <WorkoutConsumer>
    { value => <ConnectedExercises {...props} {...value} />}
  </WorkoutConsumer>
)

export default ConnectedWorkouts;