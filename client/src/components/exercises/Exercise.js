import { Button, Image, Container, Table } from "react-bootstrap";
import { ExerciseConsumer } from "../../providers/ExerciseProvider";
import { Link } from 'react-router-dom';


const Exercise = ({ workout_id, id, name, image, sets, level, movetype, category, reps, eduration, desc}) => {

  
  return (
    <>
    <Container>

    <Table>
      <tbody>
        <tr>
          <td>
          <Image width={100}
          height={80}
          src={image} 
          />
          </td>

          <td>Exercise: {name}</td>
          <td>Sets: {sets}</td>
          <td>Reps: {reps}</td>
          <td>
          <Link to={`/${id}/exerciseShow`} state={{name: name, image: image, category: category, sets: sets, level: level, movetype: movetype, reps: reps, eduration: eduration, desc: desc, workoutId: workout_id}}>
          <Button variant="dark">Show Exercise</Button>
          </Link>
          </td>
        </tr>
 
      </tbody>
    </Table>

    </Container>

    </>
  )
}



const ConnectedExercise = (props) => (
  <ExerciseConsumer>
    { value => <Exercise {...props} {...value} />}
  </ExerciseConsumer>
)

export default ConnectedExercise;