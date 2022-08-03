import { useState } from 'react'
import { Button, ListGroup, Modal } from 'react-bootstrap'
import React from 'react'
import Flash from '../shared/Flash'
import TrainingForm from './TrainingForm'
import Timer from '../timers/Timer'

const Training = ({
  deleteTraining,
  userWorkoutId,
  id,
  trainingId,
  tname,
  duration,
  image
}) => {
  const [show, setShow] = useState(false)
  const [editing, setEdit] = useState(false)

  return (
    <div>
      <ListGroup.Item>
        {tname}
        <Button onClick={() => setShow(true)}>Show</Button>
      </ListGroup.Item>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Training Show </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p> {tname}</p>
          <Timer time={duration} />
          <img src={image} alt="training image" width="490px" height="660px"/>
          <Button onClick={() => setEdit(true)}>Edit</Button>
          <Modal show={editing} onHide={() => setEdit(false)}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <TrainingForm
                id={id}
                userWorkoutId={userWorkoutId}
                tname={tname}
                duration={duration}
                image={image}
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

export default Training;
