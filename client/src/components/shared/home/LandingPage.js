import Login from '../../auth/Login';
import { Row, Col, Image, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import loginImg from '../../styles/Photos/pexels-pavel-danilyuk-5807543 1.png'



const LandingPage = () => (
<>
  <Row>
    <Col md={6}>
      <Container>
        <Login />

     
      </Container>
    </Col>
    <Col md={6}>
      <Image src={loginImg}/>
    </Col>
  </Row>
  
</>
)
export default LandingPage;