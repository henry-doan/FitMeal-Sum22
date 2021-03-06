import { useState, useEffect } from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
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
} from "react-bootstrap";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { UserWorkoutConsumer } from "../../providers/UserWorkoutProvider";
import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";


registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const defaultImage =
  "https://images.unsplash.com/photo-1635772429028-f0375f2fbddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80";

const Profile = ({ user, updateUser, workouts, getAllLoginedUserWorkouts }) => {
  const [editing, setEditing] = useState(false);
  const [formUser, setUser] = useState({
    first: "",
    last: "",
    email: "",
    image: null,
  });
  const [file, setFile] = useState();

  useEffect(() => {
    const { first, last, email, image } = user;
    setUser({ first, last, email });
    getAllLoginedUserWorkouts();
  }, []);

  const profileView = () => {
    return (
      <>
      {/* <ProfileHeader/> */}
      <div className='profile-header' style={{ backgroundImage: "url('')"}} >
    <div className='p-5 text-center bg-image'>


      </div>
    </div>
    
        {/* <Container>
          <h1>My Profile</h1>
          <Card style={{ width: "40rem" }}>
            <Card.Img variant="top" src={user.image || defaultImage} />
            <Card.Body>
              <Card.Title>
                {formUser.first} {formUser.last}
              </Card.Title>
              <Card.Title>{formUser.email}</Card.Title>
            </Card.Body>
          </Card>
        </Container> */}


        <Container className="profile-user-head">
        <Card className="card-profile" >
        <Row>

        <Col xs={6} md={4}>
        <Image variant="top" src={user.image || defaultImage} className="user-profile-img" width="70px"
              height="70px"/>
        </Col>

        <Col xs={12} md={8}>
        <Card.Body>
        <Card.Title className="profile-user-items" >
                {formUser.first}  {formUser.last}
              </Card.Title>
              <Card.Title>{formUser.email}</Card.Title>

        
        </Card.Body>
        </Col>
        </Row>
        </Card>
        </Container>
        
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user.id, formUser);
    setEditing(false);
    setUser({ ...formUser, image: null });
  };

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems);
      setUser({ ...formUser, image: fileItems[0].file });
    }
  };

  const handleFileRemoved = (e, file) => {
    setFile(null);
    setUser({ ...formUser, image: null });
  };

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
    );
  };

  return (
    <Container>
      {/* <hr /> */}
      <Row >
        {editing ? editView() : profileView()}
        <Col>
          <Button onClick={() => setEditing(!editing)} className="user-profile-button">
            {editing ? "Cancel" : "Edit"}
          </Button>
        </Col>
      </Row>

      <Container className="profile-user-items">
        <h1>My Workout</h1>
        <ListGroup variant="flush">
          {workouts.slice(0, 5).map((w) => (
            <Link
              to={`/workouts/${w.id}`}
              state={{ wname: w.wname, wimage: w.wimage }}
            >
              <ListGroup.Item>{w.wname}</ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
        <Link to={"/userWorkouts"}>
          <Button>See more</Button>
        </Link>
      </Container>
    </Container>
  );
};

const ConnectedProfile = (props) => (
  <AuthConsumer>{(auth) => <Profile {...props} {...auth} />}</AuthConsumer>
);

const ConnectedUserWorkoutProfile = (props) => (
  <UserWorkoutConsumer>
    {(value) => <ConnectedProfile {...props} {...value} />}
  </UserWorkoutConsumer>
);
export default ConnectedUserWorkoutProfile;
