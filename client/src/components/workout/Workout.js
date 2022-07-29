import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Modal, Container, Button, Card, Row, Image, Badge } from 'react-bootstrap'
import { WorkoutConsumer } from '../../providers/WorkoutProvider'

import Flash from '../shared/Flash'


const Workout = ({workouts, id, wname, wimage, difficulty, updateWorkout, deleteWorkout, errors, setErrors, created_at }) => {
  const [show, setShow] = useState(false)




  return (

    <>
    {errors ? (
      <Flash variant={errors.variant} msg={errors.msg} setErrors={setErrors} />
    ) : null}

      <Container>
      <Link to={`/workouts/${id}`} state={{wname: wname, wimage: wimage, difficulty: difficulty}} >
      <Card className="bg-dark text-black">
      <Card.Img src={wimage} alt="Card image" style={{ height: '15rem' }}/>
      <Card.ImgOverlay>

      <Badge pill bg="light" text="dark">
        {difficulty}
      </Badge>{' '}



      <Card.Title id="workout-title" >Workout: {wname}</Card.Title>

      </Card.ImgOverlay>
      </Card>
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
