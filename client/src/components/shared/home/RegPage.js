import Register from '../../auth/Register';
import { Row, Col, Image, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import regimg from '../../styles/filip-mroz-XCkRGOX2VgM-unsplash 1.png'

import Footer from './Footer';



const RegPage = () => (
<>
  <Row>
    <Col md={6}>
      <Container>
        <Register/> 

  
      </Container>
    </Col>
    <Col md={6}>
    <Image src={regimg} />
    </Col>
  </Row>

</>
)
export default RegPage;