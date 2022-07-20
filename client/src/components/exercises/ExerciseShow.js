import { useState } from "react";
import { Button, Modal, Image, Card, Container } from "react-bootstrap";
import ExerciseForm from './ExerciseForm';
import { ExerciseConsumer } from "../../providers/ExerciseProvider";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams, Link, useLocation } from 'react-router-dom';


const ExerciseShow = ({ deleteExercise, updateWorkout}) => {
  const [show, setShow] = useState(false);
  const [editing, setEdit] = useState(false); 

  const {exerciseId} = useParams()
  const location = useLocation()
  const { name, image, category, workoutId } = location.state
 
  
  return (
    <>
    <Container>

    <ListGroup as="ol">
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
    <Image width={171}
        height={180}
        src={image} />
            {name}
    
    <Badge bg="secondary" pill>Category: {category} </Badge>
    <Button variant="secondary" onClick={() => setShow(true)}>Edit</Button>
    <Button variant="danger" onClick={() => deleteExercise(workoutId, exerciseId)}>
        Delete
    </Button>
   

   
    </ListGroup.Item>
    </ListGroup>
 
    <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>

          <ExerciseForm
          workoutId={workoutId}
          exerciseId={exerciseId}
          name={name}
          image={image}
          setEdit={setEdit}
          updateWorkout={updateWorkout}
          />

        </Modal.Body>
        </Modal>
     
       
 

    </Container>

    </>
  )
}



const ConnectedExerciseShow = (props) => (
  <ExerciseConsumer>
    { value => <ExerciseShow {...props} {...value} />}
  </ExerciseConsumer>
)

export default ConnectedExerciseShow;