import React, { useState, useEffect } from "react";
import { WorkoutConsumer } from "../../../providers/WorkoutProvider";
import {} from "react-bootstrap";
import ShowList from "./ShowList";

const Home = ({
  getPopularWorkouts,
  errors,
  setErrors,
  popularWorkouts,
  getNewestWorkouts,
  newestWorkouts,
}) => {
  useEffect(() => {
    getPopularWorkouts();
    getNewestWorkouts();
    console.log(newestWorkouts);
  }, []);
  return (
    <div>
      <h1>POPULAR WORKOUTS</h1>

      <ShowList
        workouts={popularWorkouts}
        errors={errors}
        setErrors={setErrors}
      />

      <h1>NEWEST WORKOUTS</h1>
      <ShowList
        workouts={newestWorkouts}
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  );
};

const ConnectedWorkouts = (props) => (
  <WorkoutConsumer>{(value) => <Home {...props} {...value} />}</WorkoutConsumer>
);
export default ConnectedWorkouts;
