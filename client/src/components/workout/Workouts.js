import React, {useState, useEffect} from 'react'

import { WorkoutConsumer } from '../../providers/WorkoutProvider'
import {Modal} from 'react-bootstrap';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';

const Workouts = ({addWorkout, getAllWorkouts, errors, setErrors, workouts}) => {

  const [adding, setAdd] = useState(false)


  useEffect( () =>{
    getAllWorkouts()  
  }, [])
  return (
    <div>
    <button onClick={() => setAdd(true)} >+</button>

    <Modal show={adding} onHide={() => setAdd(false)}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <WorkoutForm 
      addWorkout={addWorkout}
         errors={errors} 
         setErrors={setErrors}  />
      </Modal.Body>
    </Modal>
      
      <WorkoutList
      workouts={workouts}
        errors={errors} 
        setErrors={setErrors}  />
    </div>
  )
}

const ConnectedWorkouts=(props)=>(
 <WorkoutConsumer>
 {value => <Workouts {...props} {...value}/>}
 </WorkoutConsumer>

)
export default ConnectedWorkouts;
