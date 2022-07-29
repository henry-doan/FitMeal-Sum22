import { useState } from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
import Flash from "../shared/Flash";
import { Form, Image, Col, Button, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import peach from '../styles/Peach and Green Simple Icon Health and Fitness Logo (1) 2.png';
import regimg from '../styles/filip-mroz-XCkRGOX2VgM-unsplash 1.png';

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { BtnWhiteTxt, LinkColors } from "../styles/Styles";


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
<Container className="outer">
      { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        : null
      }


<Form onSubmit={handleSubmit} className="inner">

<h3 className='reg-text'>Sign Up</h3 >
<h5>Let's start with some facts about you</h5>

<Row>
<Col>
<Form.Group className="form-group mb-4">
<Form.Label>First Name</Form.Label>
<Form.Control className="form-control"
name="first"
value={user.first}
onChange={(e) => setUser({ ...user, first: e.target.value })}
required
/>
</Form.Group>
</Col>


<Col>
<Form.Group className="form-group mb-4">
<Form.Label>Last Name</Form.Label>
<Form.Control
name="last"
value={user.last}
onChange={(e) => setUser({ ...user, last: e.target.value })}
required
/>
</Form.Group>
</Col>
</Row>







{/* image drag and drop */}
<FilePond
files={file}
onupdatefiles={handleFileUpdate}
onremovefile={handleFileRemoved}
allowMultiple={false}
name="image"
labelIdel='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
/>

<Form.Group className="form-group mb-4">
<Form.Label>Email</Form.Label>
<Form.Control className="form-control"
name="email"
value={user.email}
onChange={(e) => setUser({ ...user, email: e.target.value })}
type="email"
required
/>
</Form.Group>



<Form.Group className="form-group mb-4">
<Form.Label>Password</Form.Label>
<Form.Control
name="password"
value={user.password}
onChange={(e) => setUser({ ...user, password: e.target.value })}
type="password"
required
/>
</Form.Group>

<Form.Group className="form-group mb-4">
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

<Row >
<BtnWhiteTxt type="submit">
Sign up 
</BtnWhiteTxt>

</Row >
<p>Have an Account? <LinkColors to='/login'>Login</LinkColors></p>
</Form>


</Container>
    </>
  );
};

const ConnectedRegister = (props) => (
  <AuthConsumer>{(value) => <Register {...props} {...value} />}</AuthConsumer>
);

export default ConnectedRegister;
