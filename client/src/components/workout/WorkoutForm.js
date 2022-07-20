import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Flash from '../shared/Flash';
import { useParams, useLocation } from 'react-router-dom';
import { WorkoutConsumer } from '../../providers/WorkoutProvider';

const WorkoutForm = ({ addWorkout, errors, setErrors, updateWorkout }) => {
  const [workout, setWorkout] = useState({ wname: '', wimage: '' })
  

  const {workoutId} = useParams()
 
  const location = useLocation()

  // console.log(workoutId)




  useEffect( () => {
    if (workoutId) {
      const { wname, wimage } = location.state
      setWorkout({ wname, wimage })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (workoutId) {
      updateWorkout(workoutId, workout)
    } else {
      addWorkout(workout)
    }
    setWorkout({ wname: '', wimage: '' })
  }

  return(
    <>
      
      { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        : null
      }

      <h1 className='text-center'>
        { workoutId ? 'Update' : 'Create'} workout
      </h1>


      <Form onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Workout Name</Form.Label>
                <Form.Control
                  name='wname'
                  value={workout.wname}
                  onChange={(e) => setWorkout({ ...workout, wname: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              
              <Form.Group className="mb-3">
                <Form.Label>image</Form.Label>
                <Form.Control
                  name='wimage'
                  value={workout.wimage}
                  onChange={(e) => setWorkout({ ...workout, wimage: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </Form>

      
    </>
  )
}

const ConnectedWorkoutForm = (props) => (
  <WorkoutConsumer>
    { value => <WorkoutForm {...props} {...value} /> }
  </WorkoutConsumer>
)

export default ConnectedWorkoutForm;