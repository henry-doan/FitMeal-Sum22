import { ExerciseConsumer } from "../../providers/ExerciseProvider";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Flash from '../shared/Flash';

const ExerciseForm = ({ workoutId, addExercise, name, level, movetype, reps, eduration, sets, image, desc,  category, updateExercise, errors, setErrors }) => {
 
  const [exercise, setExercise] = useState({ name: '', image: '', category: '', sets:'', level:'', movetype: '', reps:'', eduration: '', desc:'' })

  const {exerciseId} = useParams()

  

  useEffect( () => {
    if (exerciseId) {
    
      setExercise({ name, image, category, sets, level, movetype, reps, eduration, desc})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (exerciseId) {
      updateExercise(workoutId, exerciseId, exercise)
    } else {
      addExercise(workoutId, exercise)
    }
    setExercise({ name: '', image: '', category: '', sets: '', level: '', movetype: '', reps:'', eduration:'', desc:'' })
  }

  return (
    <>
      { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        : null
      }
      <h1>{ exerciseId ? "Update" : "Create" } Exercise</h1>
      <Form onSubmit={handleSubmit}>
      <Container>
        <Row>
        <Col xs={6}>
        <Form.Group className="mb-3">
        <Form.Label>name</Form.Label>
        <Form.Control
        name='name'
        value={exercise.name}
        onChange={(e) => setExercise({ ...exercise, name: e.target.value })}
        required
        />

        </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>image</Form.Label>
                <Form.Control
                  name='image'
                  value={exercise.image}
                  onChange={(e) => setExercise({ ...exercise, image: e.target.value })}
                  required
                />
              </Form.Group>
                    {/* <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Small file input example</Form.Label>
                    <Form.Control 
                     name='image'
                    //  value={exercise.image}
                     onChange={(e) => setExercise({ ...exercise, image: e.target.value })}
                    type="file" 
                    size="sm" 
                    
                    />
                  </Form.Group> */}


        <Form.Group className="mb-3">
          <Form.Label>category</Form.Label>
          <Form.Select
            name='category'
            value={exercise.category}
            onChange={(e) => setExercise({ ...exercise, category: e.target.value })}
            required
          >
            <option>Open this select menu</option>
            <option value="Health">Health</option>
            <option value="Diet">Diet</option>
            <option value="Play">Play</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>
        </Col>
        <Col xs={3}>
        <Form.Group className="mb-3">
                <Form.Label>sets</Form.Label>
                <Form.Control
                  type="number"
                  name='sets'
                  value={exercise.sets}
                  onChange={(e) => setExercise({ ...exercise, sets: e.target.value })}
                  required
                />
              </Form.Group>
          
              <Form.Group className="mb-3">

          <Form.Label>level</Form.Label>
          <Form.Select
            name='level'
            value={exercise.level}
            onChange={(e) => setExercise({ ...exercise, level: e.target.value })}
            required
          >
           
            <option value="easy">easy</option>
            <option value="med">med</option>
            <option value="hard">hard</option>
            
          </Form.Select>

        </Form.Group>

        <Form.Group className="mb-3">
                <Form.Label>movetype</Form.Label>
                <Form.Control
                  name='movetype'
                  value={exercise.movetype}
                  onChange={(e) => setExercise({ ...exercise, movetype: e.target.value })}
                  required
                />
              </Form.Group>
              </Col>
        
        <Col xs={3}>
        <Form.Group className="mb-3">
                <Form.Label>reps</Form.Label>
                <Form.Control
                  name='reps'
                  type="number"
                  value={exercise.reps}
                  onChange={(e) => setExercise({ ...exercise, reps: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>duration</Form.Label>
                <Form.Control
                type="number"
                  name='eduration'
                  value={exercise.eduration}
                  onChange={(e) => setExercise({ ...exercise, eduration: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>desc</Form.Label>
                <Form.Control
                  name='desc'
                  value={exercise.desc}
                  onChange={(e) => setExercise({ ...exercise, desc: e.target.value })}
                  required
                />
              </Form.Group>
              
          
        </Col>
              
      

        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Row>
        </Container>
      </Form>
    </>
  )
}

const ConnectedExerciseForm = (props) => (
  <ExerciseConsumer>
    { value => <ExerciseForm {...props} {...value} /> }
  </ExerciseConsumer>
)

export default ConnectedExerciseForm;