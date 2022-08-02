import Register from '../../auth/Register';
import { Row, Col, Image, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import signupImg from '../../styles/Photos/filip-mroz-XCkRGOX2VgM-unsplash 1.png';
import { MainImg } from '../../styles/Styles';





const RegPage = () => (
<>
  <Row>
    <Col md={6}>
    
        <Register/> 
  
  
    </Col>
    <Col md={6}>
     <MainImg fluid 
    src={signupImg} />
    </Col>
  </Row>

</>
)
export default RegPage;