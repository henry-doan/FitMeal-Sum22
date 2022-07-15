import ExerciseList from './ExerciseList';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import ExerciseForm from './ExerciseForm';


const Exercises = () => {
  const [adding, setAdd] = useState(false)

  return(
    <>

    <h1>  </h1>
    <h1>Add Exercises </h1>
    <p onClick={() => setAdd(true)}>+</p>
    <Modal show={adding} onHide={() => setAdd(false)}>
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body>
      <ExerciseForm
        setAdd={setAdd}
      />

    </Modal.Body>

    </Modal>

    <ExerciseList/>



    </>
  )
}


export default Exercises;