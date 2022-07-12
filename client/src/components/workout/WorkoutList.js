import { Container, Row } from "react-bootstrap";
import Workout from "./Workout.js";
import Flash from "../shared/Flash";

const WorkoutList = ({ workouts, errors, setErrors }) => (
  <Container>
    {errors ? (
      <Flash variant={errors.variant} msg={errors.msg} setErrors={setErrors} />
    ) : null}
    <h1>All workouts</h1>
    <Row lg={4}>
      {workouts.map((w) => (
        <Workout key={w.id} {...w} />
      ))}
    </Row>
  </Container>
);

export default WorkoutList;
