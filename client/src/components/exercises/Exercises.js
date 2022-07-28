import { useState, useEffect } from 'react';
import { Modal, Button, Container, Card } from 'react-bootstrap';
import { ExerciseConsumer } from "../../providers/ExerciseProvider";
import { WorkoutConsumer } from "../../providers/WorkoutProvider";
import ExerciseForm from './ExerciseForm';
import ExerciseList from './ExerciseList';

const Exercises = ({ updateParentTime, workoutId, exercises, }) => {
  const [adding, setAdd] = useState(false)
  const [time, setTime] = useState(0);



  let total = 0;

  const totalTime = () => {
    return (total + time)
  };

  exercises.forEach(item => {
    total = total + item.eduration;
  })




  useEffect(() => {
    updateParentTime(time + total)
 }, [time]);

  return(
    <>

   
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
      <Container>
      <Card>Total Estimated time: {total} mins</Card>
      
      </Container>
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