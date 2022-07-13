import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { Modal, Container, Buttons } from 'react-bootstrap'
import { WorkoutConsumer } from '../../providers/WorkoutProvider'
import WorkoutForm from './WorkoutForm';

const WorkoutShow = ({ updateWorkout, deleteWorkout }) => {
  const { id } = useParams()
  const [workout, setWorkout] = useState({
    wname: '',
    wimage: '',
  })
  const { wname, wimage } = workout
  const [editing, setEdit]= useState(false)

  useEffect(() => {
    axios
      .get(`/api/workouts/${id}`)
      .then((res) => setWorkout(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Container>
        <div>
          <button className="btn-crud" onClick={() => setEdit(true)}>
            edit
          </button>
          <Modal show={editing} onHide={() => setEdit(false)}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <WorkoutForm
                id={id}
                wname={wname}
                wimage={wimage}
                setEdit={setEdit}
                updateWorkout={updateWorkout}
              />
            </Modal.Body>
          </Modal>
          <Link to ={`&{id}/exercises`} state={{ wname: wname}}>
            <button>Exercises</button>
          </Link>
          <button onClick={() => deleteWorkout(id)}>Delete</button>
          
        </div>
      </Container>
    </>
  )
}
const ConnectedWorkoutShow = (props) => (
  <WorkoutConsumer>
    {(value) => <WorkoutShow {...props} {...value} />}
  </WorkoutConsumer>
)
export default ConnectedWorkoutShow
