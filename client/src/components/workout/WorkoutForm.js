import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Flash from '../shared/Flash';
import { useParams, useLocation } from 'react-router-dom';
import { WorkoutConsumer } from '../../providers/WorkoutProvider';
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const WorkoutForm = ({ addWorkout, errors, setErrors, updateWorkout, setAdd, setEdit }) => {
  const [workout, setWorkout] = useState({ wname: '', difficulty: 'easy' })
  const [file, setFile] = useState()
  const [wimage, setWimage] = useState('')

  const { workoutId } = useParams()
 
  const location = useLocation()

  useEffect( () => {
    if (workoutId) {
      const { wname, wimage, difficulty } = location.state
      setWorkout({ wname, wimage, difficulty })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    let newWorkout = {...workout, wimage: wimage}
    if (workoutId) {
      updateWorkout(workoutId, newWorkout)
      setEdit(false)
    } else {
      addWorkout(newWorkout)
      setAdd(false)
    }
    setWorkout({ wname: '', wimage: '', difficulty: 'easy' })
  }

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setWimage(fileItems[0].file);
    }
  }

  const handleFileRemoved = (e, file) => {
    setFile(null)
    setWimage(null);
  }

  return(
    <>
      
      { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        : null
      }

      <h1 className='text-center'>
      { workoutId ? 'Update' : 'Create'} workout
      </h1>


      <Form onSubmit={handleSubmit}>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={6}>
              <Form.Group className="mb-3">
                <Form.Label>Workout Name</Form.Label>
                <Form.Control
                  name='wname'
                  value={workout.wname}
                  onChange={(e) => setWorkout({ ...workout, wname: e.target.value })}
                  required
                />
              </Form.Group>
          
            
              
              <Form.Group className="mb-3">
                <Form.Label>image</Form.Label>
                <FilePond
                    files={file}
                    onupdatefiles={handleFileUpdate}
                    onremovefile={handleFileRemoved}
                    allowMultiple={false}
                    name="wimage"
                    labelIdle='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
                  />
              </Form.Group>


              <Form.Group className="mb-3">
          <Form.Label>difficulty</Form.Label>
          <Form.Select
            name='difficulty'
            value={workout.difficulty}
            onChange={(e) => setWorkout({ ...workout, difficulty: e.target.value })}
            required
          >
        
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
      
          </Form.Select>
        </Form.Group>

              <Button variant="primary" type="submit">
              Submit
              </Button>
              
            </Col>
          </Row>
        
          
        </Container>
      </Form>
    </>
  )
}

const ConnectedWorkoutForm = (props) => (
  <WorkoutConsumer>
    { value => <WorkoutForm {...props} {...value} /> }
  </WorkoutConsumer>
)

export default ConnectedWorkoutForm;