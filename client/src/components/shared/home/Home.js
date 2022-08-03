import { useEffect } from "react";
import { WorkoutConsumer } from "../../../providers/WorkoutProvider";
import ShowList from "./ShowList";

const Home = ({
  getPopularWorkouts,
  popularWorkouts,
  getNewestWorkouts,
  newestWorkouts,
}) => {
  useEffect(() => {
    getPopularWorkouts();
    getNewestWorkouts();
  }, []);

  return (
    <>
      <h1>POPULAR WORKOUTS</h1>
      <ShowList workouts={popularWorkouts} />

      <h1>NEWEST WORKOUTS</h1>
      <ShowList workouts={newestWorkouts} />
    </>
  );
};

const ConnectedWorkouts = (props) => (
  <WorkoutConsumer>{(value) => <Home {...props} {...value} />}</WorkoutConsumer>
);
export default ConnectedWorkouts;
