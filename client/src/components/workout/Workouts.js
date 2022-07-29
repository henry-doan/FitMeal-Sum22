import React, {useState, useEffect} from 'react'
import { WorkoutConsumer } from '../../providers/WorkoutProvider'
import {Button, Container, Modal, Pagination} from 'react-bootstrap';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import { AuthConsumer } from '../../providers/AuthProvider';
import WorkoutHeader from './WorkoutHeader';
import { BtnWhiteTxt } from '../styles/Styles';
const Workouts = ({ addWorkout, getAllWorkouts, allWorkouts, getWorkouts, errors, setErrors, workouts, pagination}) => {
  const [pages, setPages] = useState([])
  const [active, setActive] = useState(1)
  const [adding, setAdd] = useState(false)

  const [fullscreen, setFullscreen] = useState(true);
  const values = [true];
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setAdd(true);
  }


  useEffect( () =>{
    renderPages()
    getWorkouts()  
    getAllWorkouts()
  }, [])

  const renderPages = () => {
    let items = []
    for (let num = 1; num <= pagination; num ++) {
      items.push(
        <Pagination.Item key={num}  onClick={() => getWorkouts(num)} active={num === active}>
          {num}
        </Pagination.Item>
      )
    }
    setPages(items)
  }

  return (
    <Container>
    <WorkoutHeader/>
    <BtnWhiteTxt onClick={() => handleShow()}> Create Workout + </BtnWhiteTxt>
     
      <Modal show={adding} fullscreen={fullscreen} onHide={() => setAdd(false)}>
      <Modal.Header closeButton>
      <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <WorkoutForm 
        addWorkout={addWorkout}
        errors={errors} 
        setErrors={setErrors}
        />
     
      </Modal.Body>
      </Modal>

    
      <WorkoutList
      workouts={workouts}
      allWorkouts={allWorkouts}
      errors={errors} 
      setErrors={setErrors} 
      />
      <Pagination>{pages}</Pagination>
    </Container>
  )
}

const ConnectedWorkouts=(props)=>(
 <WorkoutConsumer>
 {value => <Workouts {...props} {...value}/>}
 </WorkoutConsumer>

)

const ConnectedAuth = (props) => (
  <AuthConsumer>
    { value => <ConnectedWorkouts {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedAuth;