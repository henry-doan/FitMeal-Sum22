import { useState } from 'react';
import Fragment, { useSyncExternalStore } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Container, Row, Col, Card, Modal, Button, Image } from 'react-bootstrap';

const Profile = ({ user }) => {
  const [show, setShow] = useState(false)

  const { id, first, last, image, email } = user
  return (
    <Container>
      <h1>My Profile</h1>
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
      <Card.Title> <h3>{first} {last}</h3></Card.Title>
      <Card.Title>{email}</Card.Title>
      <Button variant="dark">Edit Profile</Button>
      </Card.Body>
    </Card>
    </Container>
  );
}

const ConnectedProfile = ( props ) => (
  <AuthConsumer>
    { value => <Profile {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedProfile;
