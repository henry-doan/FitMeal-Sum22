import {Col, Row, Card, Button, Stack, Image, CDN} from 'react-bootstrap';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import {TeamTitle} from './../styles/teampage';



const Team = () => (

<>
<TeamTitle>Meet our Team</TeamTitle>



 <Row className='row-cols-1 row-cols-md-2 g-4'>
  
    <Col md={2.4} >
      <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="./images/image1.jpg" />
      <Card.Body>
        <Card.Title>Brian Kershisnik</Card.Title>
        <Card.Text>
        Brian Kershisnik is a full stack developer with a background in system administration and security.
        </Card.Text>
        <Card.Link href="https://github.com/briankershisnik"><AiFillGithub /></Card.Link>
        <Card.Link href="mailto:bkershis@gmail.com"><AiOutlineMail /></Card.Link>
      </Card.Body>
      </Card>
    </Col>
  
    <Col md={2.4} >
      <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/image2.jpg" />
      <Card.Body>
        <Card.Title>Anna Li</Card.Title>
        <Card.Text>
        Former musician turned Junior Developer.
        </Card.Text>
        <Card.Link href="https://github.com/amazingannali"><AiFillGithub /></Card.Link>
        <Card.Link href="https://www.linkedin.com/in/anna-li-93bb3926/"><AiFillLinkedin /></Card.Link>
        <Card.Link href="mailto:annadan2005@yahoo.com"><AiOutlineMail /></Card.Link>
      </Card.Body>
      </Card>
    </Col>
    
    <Col md={2.4}>
      <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/image0.jpeg" />
      <Card.Body>
        <Card.Title>Hayley Mentz</Card.Title>
        <Card.Text>
          Former Research Scientist turned Junior Developer.
        </Card.Text>
        <Card.Link href="https://github.com/HayleyMentz"><AiFillGithub /></Card.Link>
        <Card.Link href="https://www.linkedin.com/in/hayley-mentz-75713219/"><AiFillLinkedin /></Card.Link>
        <Card.Link href="mailto:hayley.mentz@gmail.com"><AiOutlineMail /></Card.Link>
      </Card.Body>
      </Card>
    </Col>
    
    <Col md={2.4} >
      <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Abdirahman Mohamed</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="https://github.com/ramgithup"><AiFillGithub /></Card.Link>
        <Card.Link href="#"><AiFillLinkedin /></Card.Link>
        <Card.Link href="mailto:"><AiOutlineMail /></Card.Link>
      </Card.Body>
      </Card>
    </Col>

    <Col md={2.4}>
      <Card  style={{ width: '18rem', margintop: '20px' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Heidi Villa</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="https://github.com/heidiv5689"><AiFillGithub /></Card.Link>
        <Card.Link href="#"><AiFillLinkedin /></Card.Link>
        <Card.Link href="mailto:"><AiOutlineMail /></Card.Link>
      </Card.Body>
      </Card>
    </Col>  
</Row>
 
   
        
</>



)

export default Team;