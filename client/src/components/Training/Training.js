import { useState } from 'react'
import { Button, ListGroup, Modal } from 'react-bootstrap'
import Flash from '../shared/Flash'
import TrainingForm from './TrainingForm'

const Training = ({
  deleteTraining,
  userWorkoutId,
  id,
  trainingId,
  tname,
  duration,
}) => {
  const [show, setShow] = useState(false)
  const [editing, setEdit] = useState(false)
  return (
    <div>
      <ListGroup.Item>
        {tname} {duration} minites
        <Button onClick={() => setShow(true)}>Show</Button>
      </ListGroup.Item>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Training Show </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> {tname}</p>
          <p> {duration} min</p>
          <Button onClick={() => setEdit(true)}>Edit</Button>
          <Modal show={editing} onHide={() => setEdit(false)}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <TrainingForm
                id={id}
                userWorkoutId={userWorkoutId}
                tname={tname}
                duration={duration}
                setEdit={setEdit}
              />
            </Modal.Body>
          </Modal>

          <Button onClick={() => deleteTraining(userWorkoutId, id)}>
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Training
