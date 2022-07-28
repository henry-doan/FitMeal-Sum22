import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserWorkoutList = ({
  userWorkouts,
  deleteUserWorkout,
  id,
  wname,
  wimage,
}) => {
  return (
    <>
      {userWorkouts.map((u) => (
        <>
          {u.workout_id === id ? (
            <>
              <Link
                to={`/workouts/${id}`}
                state={{ wname: wname, wimage: wimage }}
              >
                {wname}
              </Link>
              <Button
                variant="danger"
                onClick={() => deleteUserWorkout(u.user_id, u.id)}
              >
                Delete
              </Button>
              <Link to={`/${u.id}/trainings`}>Trainings</Link>
              <br />
            </>
          ) : (
            <></>
          )}
        </>
      ))}
    </>
  );
};

export default UserWorkoutList;
