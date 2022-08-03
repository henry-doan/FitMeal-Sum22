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
import { LinkColors } from "../styles/Styles";
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
  const { workoutId } = useParams();
  const location = useLocation();
  const { wname, wimage } = location.state;
  const [time, setTime] = useState(0);
  const [editing, setEdit] = useState(false);

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
     
      <LinkColors to='/workouts'>Return to Workouts</LinkColors>

        <Card>
          <Row>
            <Col xs={6} md={4}>
              <Card.Img variant="top" src={wimage} style={{ height: '15rem' }}/>
            </Col>
            <Col xs={12} md={8}>
              <Card.Body>
                <Card.Title>Workout: {wname}</Card.Title>
                <Card.Text>
                Estimated time: {time} mins
                </Card.Text>
                <Button variant="secondary" onClick={() => setEdit(true)}>Edit</Button>
                <Button variant="danger" onClick={() => deleteWorkout(workoutId)}>Delete</Button>
                <Button
                variant="secondary"
                onClick={() => addUserWorkout(user.id, workoutId)}
                >
                Add to My workout
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Modal show={editing} onHide={() => setEdit(false)}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <WorkoutForm
              workoutId={workoutId}
              wname={wname}
              wimage={wimage}
              updateWorkout={updateWorkout}
              setEdit={setEdit}
            />
          </Modal.Body>
        </Modal>
        <Exercises 
          workoutId={workoutId}
          wname={wname}
          updateParentTime={setTime}
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
