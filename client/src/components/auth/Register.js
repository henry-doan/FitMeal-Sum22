import { useState } from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
import Flash from "../shared/Flash";
import { Form, Image, Col, Button, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';


// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const defaultImage = "https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png";

const Register = ({ handleRegister, errors, setErrors }) => {
  const [file, setFile] = useState();
  const [user, setUser] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    first: "",
    last: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.passwordConfirmation) {
      handleRegister(user);
      setUser({
        email: "",
        password: "",
        passwordConfirmation: "",
        first: "",
        last: "",
        image: "",
      });
    } else {
      alert("Password does not match!");
    }
  };

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems);
      setUser({ ...user, image: fileItems[0].file });
    }
  };

  const handleFileRemoved = (e, file) => {
    setFile(null);
    setUser({ ...user, image: null });
  };

  return (
    <>
      <Row>
        <Col md={6}>
          <Container>
            {errors ? (
              <Flash
                variant={errors.variant}
                msg={errors.msg}
                setErrors={setErrors}
              />
            ) : null}
            <h1>Register</h1>
            <Form onSubmit={handleSubmit}>
             
              {/* image drag and drop */}
              <FilePond
                files={file}
                onupdatefiles={handleFileUpdate}
                onremovefile={handleFileRemoved}
                allowMultiple={false}
                name="image"
                labelIdel='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
              />

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  type="email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="first"
                  value={user.first}
                  onChange={(e) => setUser({ ...user, first: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="last"
                  value={user.last}
                  onChange={(e) => setUser({ ...user, last: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  type="password"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password Confirmation </Form.Label>
                <Form.Control
                  name="passwordConfirmation"
                  value={user.passwordConfirmation}
                  onChange={(e) =>
                    setUser({ ...user, passwordConfirmation: e.target.value })
                  }
                  type="password"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <p>Already Have an Account? <Link to='/'>Login</Link></p>
          </Container>
        </Col>
        <Col md={6}>
          <Image src="https://images.unsplash.com/photo-1603077492340-e6e62b2a688b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </Col>
      </Row>
    </>
  );
};

const ConnectedRegister = (props) => (
  <AuthConsumer>{(value) => <Register {...props} {...value} />}</AuthConsumer>
);

export default ConnectedRegister;
