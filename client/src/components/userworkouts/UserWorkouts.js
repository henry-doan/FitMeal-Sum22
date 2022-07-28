import React, { useEffect } from "react";
import { UserWorkoutConsumer } from "../../providers/UserWorkoutProvider";
import UserWorkoutList from "./UserWorkoutList";

const UserWorkouts = ({
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

  return (
    <div>
      <h1>My Workout</h1>
      {workouts.map((w) => (
        <UserWorkoutList
          {...w}
          userWorkouts={userWorkouts}
          deleteUserWorkout={deleteUserWorkout}
        />
      ))}
    </div>
  );
};

const ConnectedUserWorkouts = (props) => (
  <UserWorkoutConsumer>
    {(value) => <UserWorkouts {...props} {...value} />}
  </UserWorkoutConsumer>
);

export default ConnectedUserWorkouts;
