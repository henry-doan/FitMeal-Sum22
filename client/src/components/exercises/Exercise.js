import { ExerciseConsumer } from "../../providers/ExerciseProvider";
import { useState, useEffect } from "react";
import { Button, Modal, Image, Card, Container } from "react-bootstrap";
import ExerciseForm from './ExerciseForm';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const Exercise = ({ workoutId, id, ename, eimage, category, deleteExercise}) => {
  const [show, setShow] = useState(false);
  const [editing, setEdit] = useState(false); 


  return (
    <>
    <Container>
    <ListGroup as="ol">
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
    <Image width={171}
        height={180}
        src={eimage} />
    {ename}
    
    <Badge bg="secondary" pill>Category: {category}</Badge>
    <Link to={`/${id}/exercise`}>
    <Button variant="dark">Show Exercise</Button>
    </Link>
     
     <Button variant="danger" onClick={() => deleteExercise(workoutId, id)}>Delete</Button>
    </ListGroup.Item>
    </ListGroup>

    </Container>

    </>
  )
}



const ConnectedExercise = (props) => (
  <ExerciseConsumer>
    { value => <Exercise {...props} {...value} />}
  </ExerciseConsumer>
)

export default ConnectedExercise;