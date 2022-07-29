import Login from '../../auth/Login';
import { Row, Col, Image, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import abc from '../../styles/pexels-pavel-danilyuk-5807543 1.png'

import Footer from './Footer';


const LandingPage = () => (
<>
  <Row>
    <Col md={6}>
      <Container>
        <Login />

     
      </Container>
    </Col>
    <Col md={6}>
      <Image src={abc}/>
    </Col>
  </Row>
  
</>
)
export default LandingPage;