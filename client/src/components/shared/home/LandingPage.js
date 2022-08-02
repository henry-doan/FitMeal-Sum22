import Login from '../../auth/Login';
import { Row, Col, Image, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import loginImg from '../../styles/Photos/pexels-pavel-danilyuk-5807543 1.png'
import { MainImg } from '../../styles/Styles';



const LandingPage = () => (
<>
  <Row>
    <Col md={6}>
  
        <Login />

     
    
    </Col>
    <Col md={6}>
      <MainImg fluid
      alt="Image"
      src={loginImg}
      />
      
    </Col>
  </Row>
  
</>
)
export default LandingPage;