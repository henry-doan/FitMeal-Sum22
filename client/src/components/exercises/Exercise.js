
import { Button, Image, Container } from "react-bootstrap";
import { ExerciseConsumer } from "../../providers/ExerciseProvider";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


const Exercise = ({ workout_id, id, name, image, sets, level, movetype, category, reps, eduration, desc}) => {

  
  return (
    <>
    <Container>

    <ListGroup as="ol">
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
    <Image width={171}
        height={180}
        src={image} />
        <p> image here</p>
            Exercise: {name}
    <Badge bg="secondary" pill>Category: {category} </Badge>
    <h4>Estimated time duration:<br/>
    {eduration} mins </h4>
    <Link to={`/${id}/exerciseShow`} state={{name: name, image: image, category: category, sets: sets, level: level, movetype: movetype, reps: reps, eduration: eduration, desc: desc, workoutId: workout_id}}>
    <Button variant="dark">Show Exercise</Button>
    </Link>

   
    </ListGroup.Item>
    </ListGroup>
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