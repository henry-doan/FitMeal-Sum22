import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Modal, Container, Card, Row, Image, Badge } from 'react-bootstrap'
import { WorkoutConsumer } from '../../providers/WorkoutProvider'
import { WorkoutCard, WorkoutCardOverlay, WorkoutCardTitle } from '../styles/Styles';

import Flash from '../shared/Flash';


const Workout = ({workouts, id, wname, wimage, difficulty, updateWorkout, deleteWorkout, errors, setErrors, created_at }) => {
  const [show, setShow] = useState(false)
  
  return (
    <>
    {errors ? (
      <Flash variant={errors.variant} msg={errors.msg} setErrors={setErrors} />
    ) : null}

      <Container>
      <Link to={`/workouts/${id}`} state={{wname: wname, wimage: wimage, difficulty: difficulty}} >
      
      <WorkoutCard className="bg-dark">
      <Card.Img src={wimage} alt="Card image" style={{ height: '15rem', minWidth: '5rem' }}/>
      <WorkoutCardOverlay>

      <Badge pill bg="light" text="dark">
        {difficulty}
      </Badge>{' '}



      <WorkoutCardTitle className="card text-center mt-5 top-50">Workout: {wname}</WorkoutCardTitle>

      </WorkoutCardOverlay>
      </WorkoutCard>
      </Link>


      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <Container>
     
        <Row>
        <h1>Workout Name: {wname}</h1>
        <h4>Image:</h4>
        <Image 
        width={171}
        height={180} 
        src={wimage} />
        </Row>
        </Container>
        </Modal.Body>
      </Modal>
     
  </Container>
      
    </>
  )
}

const ConnectedWorkout = (props) => (
  <WorkoutConsumer>
    {(value) => <Workout {...props} {...value} />}
  </WorkoutConsumer>
)

export default ConnectedWorkout;
