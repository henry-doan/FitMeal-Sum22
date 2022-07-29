import { useState } from "react";
import { Button, Modal, Image, Container, Row} from "react-bootstrap";
import ExerciseForm from './ExerciseForm';
import { ExerciseConsumer } from "../../providers/ExerciseProvider";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams, Link, useLocation } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';


const ExerciseShow = ({ user, deleteExercise, updateWorkout}) => {
  const [show, setShow] = useState(false);


  const {exerciseId} = useParams()
  const location = useLocation()
  const { name, image, category, sets, level, movetype, reps, eduration, desc, workoutId } = location.state
 
  return (
    <>
    <Container>
    
   
    <Link to="/workouts">Return to Workouts</Link>
    <ListGroup as="ol">
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
    <Row>
    <Image width={171}
        height={180}
        src={image} />
    </Row>
    <Row> 

    { user ? (( 
           <>
          <Button variant="secondary" onClick={() => setShow(true)}>Edit</Button>
    <Button variant="danger" onClick={() => deleteExercise(workoutId, exerciseId)}>
        Delete
    </Button>
        
           </>
      )): 
        null
      }
  
  
    </Row>   
   
    </ListGroup.Item>
    </ListGroup>
 
    
  
    <ol>
    <li>Exercise Name: {name} </li>
    <li>   <Badge bg="secondary" pill>Category: {category} </Badge></li>
    <li>description:{desc}</li>
    <li>duration:{eduration}</li>
    <li>sets:{sets}</li>
    <li> level: {level}</li>
    <li> movetype: {movetype}</li>
    <li> reps: {reps} </li>
    <li>IMAGE: {image} </li>

    </ol>

    <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>

          <ExerciseForm
          workoutId={workoutId}
          exerciseId={exerciseId}
          desc={desc}
          eduration={eduration}
          sets={sets}
          level={level}
          movetype={movetype}
          reps={reps}
          category={category}
          name={name}
          image={image}
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


const ConnectedAuth = (props) => (
  <AuthConsumer>
    { value => <ConnectedExerciseShow {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedAuth;