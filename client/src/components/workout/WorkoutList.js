import { useState } from 'react';
import { Row, Form, Container, Col } from 'react-bootstrap';
import Flash from '../shared/Flash';
import Workout from './Workout';

const WorkoutList = ({ allWorkouts, workouts, errors, setErrors }) => {
  
  const [query, setQuery] = useState('');

  return(
  <>
    {errors ? (
      <Flash variant={errors.variant} msg={errors.msg} setErrors={setErrors} />
    ) : null}

    <Container>
      <Row>
        <Col xs={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                  name='query'
                  placeholder="Search Workouts"
                  onChange={(e)=> setQuery(e.target.value)}
                  />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
    
    <Container> 
      <Row sm={3}>
        { query ? allWorkouts.filter(workouts => workouts.wname.toLowerCase().includes(query)
        ).map((workout)=>(
          <Workout key={workout.id} {...workout}/>
      )) 
      : 
      workouts.map((workout)=>(
        <Workout key={workout.id} {...workout}/>
      ))
      } 
      </Row>
    </Container>
  </>
)}

export default WorkoutList;
