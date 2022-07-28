import { Row } from 'react-bootstrap';
import Flash from '../shared/Flash';
import Workout from './Workout';

const WorkoutList = ({ workouts, errors, setErrors }) => (
  <>
    {errors ? (
      <Flash variant={errors.variant} msg={errors.msg} setErrors={setErrors} />
    ) : null}

    <h1>Workout List </h1>
    <Row sm={4}>
      { workouts.map( c => 
        <Workout key={c.id} {...c} />
      )}
    </Row>
  </>
)

export default WorkoutList;
