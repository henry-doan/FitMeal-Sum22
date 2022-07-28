import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import {
  Modal,
  Container,
  Button,
  Card,
  Row,
  Image,
  Col,
} from "react-bootstrap";
import { WorkoutConsumer } from "../../providers/WorkoutProvider";
import { AuthConsumer } from "../../providers/AuthProvider";
import { UserWorkoutConsumer } from "../../providers/UserWorkoutProvider";
import WorkoutForm from "./WorkoutForm";
import Flash from "../shared/Flash";
import Exercises from "../exercises/Exercises";
import Accordion from 'react-bootstrap/Accordion';
const WorkoutShow = ({ 
  getAllWorkouts, 
  workouts, 
  updateWorkout, 
  deleteWorkout, 
  errors, 
  setErrors, 
  user, 
  addUserWorkout,
}) => {
  const [show, setShow] = useState(false);
  const [workout, setWorkout] = useState({ wname: "", wimage: "" });

  const { workoutId } = useParams();
  const location = useLocation();
  const { wname, wimage } = location.state;



  const [time, setTime] = useState(0);

  const updateParentTime = (t) => {
   setTime(t); }


  return (
    <>
      {errors ? (
        <Flash
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
      ) : null}

      <Container>
        <h1>Workout Show</h1>
      <Link to='/workouts'>Return to Workouts</Link>

      <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
      <Accordion.Header>Workout: {wname} ID:{workoutId}</Accordion.Header>
      <Accordion.Body>
      <Row>
      <Col xs={12} md={8}>
      <Button variant="secondary" onClick={() => setShow(true)}>Edit</Button>
      <Button variant="danger" onClick={() => deleteWorkout(workoutId)}>Delete</Button>

      <Button
      variant="secondary"
      onClick={() => addUserWorkout(workoutId, user.id)}
      >
      Add to My workout
      </Button>
      </Col>

      <Col xs={6} md={4}>
      <Card.Img variant="top" src={wimage} style={{ height: '15rem' }}/>
      </Col>
      </Row>
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>

        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <WorkoutForm
              workoutId={workoutId}
              wname={wname}
              wimage={wimage}
              updateWorkout={updateWorkout}
            />
          </Modal.Body>
        </Modal>

        <Exercises 
        workoutId={workoutId}
        wname={wname}
        updateParentTime={updateParentTime}
        />
      </Container>
    </>
  );
};
const ConnectedWorkout = (props) => (
  <WorkoutConsumer>
    {(value) => <WorkoutShow {...props} {...value} />}
  </WorkoutConsumer>
);

const ConnectedWorkoutShow = (props) => (
  <UserWorkoutConsumer>
    {(value) => <ConnectedWorkout {...props} {...value} />}
  </UserWorkoutConsumer>
);

const ConnectedUserWorkoutShow = (props) => (
  <AuthConsumer>
    {(value) => <ConnectedWorkoutShow {...props} {...value} />}
  </AuthConsumer>
);
export default ConnectedUserWorkoutShow;
