import { useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import Flash from '../shared/Flash';

const Training = ({userWorkoutId, id, tname, duration}) => {
  const [show, setShow] = useState(false);
  return (
    <div>
    
    <ListGroup.Item>
        name: {tname}  duration:{duration} 
        <Button onClick={() => setShow(true)}>
          Show
        </Button>
      </ListGroup.Item>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Training Show </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>name: {tname}</p>
          <p>duration: {duration}</p>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Training;
