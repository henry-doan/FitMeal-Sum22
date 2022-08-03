import { useState, useEffect } from 'react'
import { AuthConsumer } from '../../providers/AuthProvider'
import {
  Form,
  Row,
  Col,
  Image,
  Container,
  Button,
  Modal,
  Card,
  ListGroup,
} from 'react-bootstrap'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { UserWorkoutConsumer } from '../../providers/UserWorkoutProvider'
import { Link } from 'react-router-dom'
import headerpic from '../../imges/headerpic.png'
import Avatar from '../../imges/Avatar.png'
import followtick from '../../imges/followtick.svg'
import chat_bubble_outline_24px from '../../imges/chat_bubble_outline_24px.svg'
import Base from '../../imges/Base.png'
import img from '../../imges/img.png'
import Path3592 from '../../imges/Path3592.svg'
import clock from '../../imges/clock.svg'
import Group16 from '../../imges/Group16.svg'
import Group15 from '../../imges/Group15.svg'
import {
  HeaderImg,
  ProfileImg,
  UseName,
  BodyRow,
  InfoCard,
  CardHeader,
  WorkoutBtn,
  EntBtns,
  PrevWorkout,
  PrevExercise,
  ExerciseDate,
  ExerciseCards,
  EditFolow,
} from '../shared/Styles'
import { TrainingConsumer } from '../../providers/TrainingProvider'
import {ExerciseConsumer} from '../../providers/ExerciseProvider'; 

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const defaultImage =
  'https://images.unsplash.com/photo-1635772429028-f0375f2fbddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
const UserDefault ='https://cdn.pixabay.com/photo/2014/04/02/14/11/male-306408_1280.png'
const Profile = ({
  user,
  updateUser,
  workouts,
  getAllLoginedUserWorkouts,
  trainings,
  getAllTrainings,
  getAllExercises,
  exercises
}) => {
  const [editing, setEditing] = useState(false)
  const [formUser, setUser] = useState({
    first: '',
    last: '',
    email: '',
    image: null,
  })
  const [file, setFile] = useState()
  const [follow, setFollow] = useState(false)

  useEffect(() => {
    getAllTrainings(8)
    const { first, last, email, image } = user
    setUser({ first, last, email })
    getAllLoginedUserWorkouts()
  }, [])
  const profileView = () => {
    return (
      <div >
        <Container>
          <header>
            <HeaderImg src={headerpic} />
          </header>
          <div>
            <ProfileImg src={user.image || defaultImage} />
          </div>
          <UseName>
            {formUser.first} <br /> {formUser.last}
          </UseName>

          <BodyRow>
            <Col>
              <InfoCard>
                <CardHeader>
                  <img src={Group15} style={{ marginTop: '-8px' }}></img>
                  <h5>information</h5>
                </CardHeader>
                <p>
                  Sup. I’m a “rockstar” web developer at a generic company. I’m
                  here to make those gainz! Follow me for workouts with high
                  intensity compound lifts performed at way too high frequency.
                </p>
                <p>Elite fitness level</p>
                <p>Male, 170.6 pounds</p>
                <p>Born 6 April 1986</p>
              </InfoCard>

              <InfoCard>
                <CardHeader>
                  <img src={Group16} style={{ marginTop: '-8px' }}></img>
                  <h5>my Workouts</h5>
                </CardHeader>
               
                <ListGroup variant="flush">
                  {workouts.slice(0, 5).map((w) => (
                    <Link
                      to={`/workouts/${w.id}`}
                      state={{ wname: w.wname, wimage: w.wimage }}
                    >
                      <WorkoutBtn>
                        <span style={{ color: '#FBD878', marginLeft: '10px' }}>
                          {w.wname}
                        </span>
                      </WorkoutBtn>
                    </Link>
                  ))}
                </ListGroup>


                <Link to={'/userWorkouts'}>
                  <p>see more</p>{' '}
                </Link>
              </InfoCard>
            </Col>
            <Col>
              <EntBtns>
                <Link to={'/userWorkoutId/trainings'}>
                  <Button variant="dark"> + New Workout Entry</Button>
                </Link>
                <Link to={'/workouts'}>
                  <Button variant="warning"> + New Workout</Button>
                </Link>
              </EntBtns>
              <div>
                <h5>previews Entity</h5>
              </div>
              {trainings.length > 0 ? (
                <PrevWorkout>
                  <img
                    src={trainings[2].image}
                    alt="prev-ent"
                    width="490px"
                    height="660px"
                  />
                  <PrevExercise>
                    <div style={{ display: 'flex', gap: '7px' }}>
                      <img
                        src={user.images || UserDefault}
                        style={{
                          width: '40px',
                          height: '40px',
                          marginTop: '-10px',
                          borderRadius: '50%',
                        }}
                      />
                      <h5>{trainings[2].tname}</h5>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '160px',
                        alignItems: 'center',
                      }}
                    >
                      <ExerciseDate> {trainings[2].created_at}</ExerciseDate>
                      <div>
                        <img src={chat_bubble_outline_24px} /> +{' '}
                      </div>
                    </div>
                  </PrevExercise>
                </PrevWorkout>
              ) : null}
              {workouts.length > 0 ? (
                <ExerciseCards>
                  <h3> {trainings[2].tname}</h3>
                  <Row>
                    <Col>
                      <img
                        src={workouts[0].wimage}
                        style={{
                          marginLeft: '70px',
                          width: '88px',
                          height: '88px',
                          borderRadius: '8px',
                        }}
                      />
                    </Col>
                    <Col style={{ marginRight: '100px' }}>
                      <p
                        style={{
                          fontSize: '15px',
                          fontWeight: '600',
                          lineHeight: '15px',
                          marginBottom: '-12px',
                        }}
                      >
                         {workouts[0].wname}
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          gap: '10px',
                          fontSize: '12px',
                          lineHeight: '12px',
                        }}
                      >
                        <img src={Path3592} />{' '}
                        <p style={{ marginTop: '20px' }}>110 kcal</p>
                        <p style={{ marginTop: '20px' }}>|</p>
                        <img src={clock} />{' '}
                        <p style={{ marginTop: '20px' }}> 110 min {exercises.timeframe}</p>
                      </div>
                      <p style={{ marginTop: '-10px' }}> bigginer{exercises.level}</p>
                    </Col>
                  </Row>
                </ExerciseCards>
              ) : null}
            </Col>
          </BodyRow>
        </Container>
        </div>
        
      
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.id, formUser)
    setEditing(false)
    setUser({ ...formUser, image: null })
  }

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setUser({ ...formUser, image: fileItems[0].file })
    }
  }

  const handleFileRemoved = (e, file) => {
    setFile(null)
    setUser({ ...formUser, image: null })
  }

  const editView = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Col md="4">
          <FilePond
            files={file}
            onupdatefiles={handleFileUpdate}
            onremovefile={handleFileRemoved}
            allowMultiple={false}
            name="image"
            labelIdle='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
          />
          <br />
          <br />
          <br />
        </Col>
        <Col md="8">
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="first name"
              value={formUser.first}
              required
              onChange={(e) => setUser({ ...formUser, first: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="last name"
              value={formUser.last}
              required
              onChange={(e) => setUser({ ...formUser, last: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formUser.email}
              required
              onChange={(e) => setUser({ ...formUser, email: e.target.value })}
            />
          </Form.Group>
          <Button type="submit">Update</Button>
        </Col>
      </Form>
    )
  }

  return (
    <Container>
      {/* <hr /> */}
      <Row >
        {editing ? editView() : profileView()}

        <Col>
          <EditFolow >
            <Button onClick={() => setEditing(!editing)}>
              {editing ? 'Cancel' : 'Edit'}
            </Button>
            <Button onClick={() => setFollow(!follow)} style={{background: '#282A64'}}>
              {follow ? 'Following' : 'Follow'} 
            </Button>
          </EditFolow>
          <p style={{marginTop: '100%'}}> </p>
        </Col>
      </Row>

      <Container>
        <ListGroup variant="flush">
          {workouts.slice(0, 5).map((w) => (
            <Link
              to={`/workouts/${w.id}`}
              state={{ wname: w.wname, wimage: w.wimage }}
            ></Link>
          ))}
        </ListGroup>
      </Container>
    </Container>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>{(auth) => <Profile {...props} {...auth} />}</AuthConsumer>
)

const ConnectedUserWorkoutProfile = (props) => (
  <UserWorkoutConsumer>
    {(value) => <ConnectedProfile {...props} {...value} />}
  </UserWorkoutConsumer>
)

const ConnectedTraining = (props) => (
  <TrainingConsumer>
    {(value) => <ConnectedUserWorkoutProfile {...props} {...value} />}
  </TrainingConsumer>
)

const ConnectedExercises =(props)=>(
  <ExerciseConsumer>
   {(value)=> <ConnectedTraining {...props} {...value} />}
  </ExerciseConsumer>
)

export default ConnectedExercises;
