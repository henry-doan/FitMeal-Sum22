import React from 'react'
import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import TrainingForm from './TrainingForm'
import TrainingList from './TrainingList'

const Trainings = ({ userWorkoutId, trainings, id}) => {
  const [adding, setAdd] = useState(false)

  return (
    <div>
      <p onClick={() => setAdd(true)}>
      <button>+</button>
      </p>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <TrainingForm setAdd={setAdd} userWorkoutId={userWorkoutId} />
        </Modal.Body>
      </Modal>

      <TrainingList trainings={trainings} />
    </div>
  )
}
export default Trainings;
