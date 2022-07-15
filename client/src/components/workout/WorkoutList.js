import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Flash from '../shared/Flash';
import WorkoutShow from './WorkoutShow';

const WorkoutList = ({ workouts, errors, setErrors }) => (
  <>
    {errors ? (
      <Flash variant={errors.variant} msg={errors.msg} setErrors={setErrors} />
    ) : null}

    <Container>
      <h1> workouts</h1>
    </Container>

    <Container>
      <Row lg={4}>
        {workouts.map((w) => (
          <Col>
            <Card style={{ width: '14rem' }}>
              <Card.Body>
                <Card.Img variant="top" src={w.wimage} />
                <Card.Title className="mt-4"> {w.wname} Workout</Card.Title>
                <Card.Link>
                  <WorkoutShow key={w.id} {...w}/>
                  <Link to={`/workouts/${w.id}`}>
                    <Button variant="dark">Show</Button>
                  </Link>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </>
)

export default WorkoutList
