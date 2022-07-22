import Login from '../../auth/Login';
import { Row, Col, Image, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const LandingPage = () => (
<>
  <Row>
    <Col md={6}>
      <Container>
        <Login />
        <p>Don't Have an Account? <Link to='/register'>Sign Up</Link></p>
        <footer>
          <h6>© 2022 DevPoint Labs Part-Time Summer Cohort</h6>
        </footer>
      </Container>
    </Col>
    <Col md={6}>
      <Image src="https://images.unsplash.com/photo-1603077492340-e6e62b2a688b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
    </Col>
  </Row>
</>
)

export default LandingPage;