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

  const [editing, setEdit] = useState(false);

  // const {id} = useParams()
  //   useEffect( () =>{
  //     getAllWorkouts(workoutId)

  //   }, [])

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
        <Card>
          <Row>
            <Col xs={12} md={8}>
              <Card.Title className="mt-4">
                Workout: {wname} {workoutId}
              </Card.Title>

              <Button variant="secondary" onClick={() => setShow(true)}>
                Edit
              </Button>

              <Button variant="danger" onClick={() => deleteWorkout(workoutId)}>
                Delete
              </Button>

              <Button
                variant="secondary"
                onClick={() => addUserWorkout(user.id, workoutId)}
              >
                Add to My workout
              </Button>
            </Col>
            <Col xs={6} md={4}>
              <Card.Img variant="top" src={wimage} />
            </Col>
          </Row>
        </Card>

        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <WorkoutForm
              workoutId={workoutId}
              wname={wname}
              wimage={wimage}
              setEdit={setEdit}
              updateWorkout={updateWorkout}
            />
          </Modal.Body>
        </Modal>

        <h1>Exercise's</h1>
        <Exercises workoutId={workoutId} wname={wname} />
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
