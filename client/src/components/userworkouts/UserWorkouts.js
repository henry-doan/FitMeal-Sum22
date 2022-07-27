import React, { useEffect } from "react";
import { UserWorkoutConsumer } from "../../providers/UserWorkoutProvider";
import { Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserWorkouts = ({
  addUserWorkout,
  getAllUserWorkouts,
  deleteUserWorkout,
  errors,
  setErrors,
  userWorkouts,
}) => {
  useEffect(() => {
    getAllUserWorkouts();
  }, []);
  return (
    <div>
      <h1>My Workout</h1>
      <Row sm={6}>
        {userWorkouts.map((u) => (
          <>
            <Link to={`/workouts/${u.workout_id}`}></Link>

            <Button variant="danger" onClick={() => deleteUserWorkout(u.id)}>
              Delete
            </Button>
          </>
        ))}
      </Row>
    </div>
  );
};

const ConnectedUserWorkouts = (props) => (
  <UserWorkoutConsumer>
    {(value) => <UserWorkouts {...props} {...value} />}
  </UserWorkoutConsumer>
);
export default ConnectedUserWorkouts;
