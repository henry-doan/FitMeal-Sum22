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
  getAllLoginedUserWorkouts,
  workouts,
}) => {
  useEffect(() => {
    getAllLoginedUserWorkouts();
    getAllUserWorkouts();
  }, []);
  const renderWorkouts = () => {
    for (let i = 0; i < workouts; i++) {
      for (let j = 0; j < userWorkouts; j++) {
        if (userWorkouts[j].workout_id === workouts[i].id) {
          return (
            <>
              <p>hello</p>
              {/* <p>{workouts[i].wname}</p>
              <Button
                variant="danger"
                onClick={() =>
                  deleteUserWorkout(userWorkouts[j].user_id, userWorkouts[j].id)
                }
              >
                Delete
              </Button> */}
            </>
          );
        }
      }
    }
  };
  return (
    <div>
      <h1>My Workout</h1>
      <Row sm={6}>{renderWorkouts()}</Row>
    </div>
  );
};

const ConnectedUserWorkouts = (props) => (
  <UserWorkoutConsumer>
    {(value) => <UserWorkouts {...props} {...value} />}
  </UserWorkoutConsumer>
);
export default ConnectedUserWorkouts;
