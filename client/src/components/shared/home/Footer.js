import logo from '../../styles/Photos/Logo.png';
import { FootCol, FootItems, FootLine, FootLinks } from '../../styles/Styles';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => (


  <>

  <FootLine> 
  <FootItems>
    <Row>
      <Col>      
        <img 
        alt="logo"
        src={logo}
        width="70px"
        height="70px"
        />
      </Col>

      <Col>FITMEAL</Col>
      <Col>
        <FootLinks to='/'> Privacy Policy </FootLinks>
      </Col>
      <Col>
      <FootLinks to='/'> License  </FootLinks>
      </Col>
    </Row>

  </FootItems>
  </FootLine>
  
  </>
) 
export default Footer;