import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Modal, Container, Button, Card, Row, Image } from 'react-bootstrap'
import { WorkoutConsumer } from '../../providers/WorkoutProvider'

import Flash from '../shared/Flash'


const Workout = ({workouts, id, wname, wimage, updateWorkout, deleteWorkout, errors, setErrors }) => {
  const [show, setShow] = useState(false)




  return (

    <>
    {errors ? (
      <Flash variant={errors.variant} msg={errors.msg} setErrors={setErrors} />
    ) : null}
     
  <Container>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={wimage} style={{ height: '15rem' }}  />
        <Card.Body>
          <Card.Title>Workout: {wname}</Card.Title>
          <Card.Text>
          

          </Card.Text>
          <Link to={`/workouts/${id}`} state={{wname: wname, wimage: wimage}}>
          <Button variant="dark">Show</Button>
          </Link>
   
        </Card.Body>
      </Card>

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
