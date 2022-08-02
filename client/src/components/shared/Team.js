import {Col, Row, Card, Container } from 'react-bootstrap';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import {TeamTitle, TeamCard, TeamLink, TeamImage} from './../styles/teampage';

const Team = () => (
<Container>
  <TeamTitle>Meet our Team</TeamTitle>
  <Row xs={1} md={3} xl={5} className="g-5 justify-content-center">
    <Col>
      <TeamCard >
        <TeamImage variant="top" src="./images/image1.jpg" />
        <Card.Body>
          <Card.Title>Brian Kershisnik</Card.Title>
          <TeamLink href="https://github.com/briankershisnik"><AiFillGithub /></TeamLink>
          <TeamLink href="mailto:bkershis@gmail.com"><AiOutlineMail /></TeamLink>
          <Card.Text>
          Brian Kershisnik is a full stack developer with a background in system administration and security.
          </Card.Text>
        </Card.Body>
      </TeamCard>
    </Col>

    <Col>
      <TeamCard>
        <TeamImage variant="top" src="./images/image2.jpg" />
        <Card.Body>
          <Card.Title>Anna Li</Card.Title>
          <TeamLink href="https://github.com/amazingannali"><AiFillGithub /></TeamLink>
          <TeamLink href="https://www.linkedin.com/in/anna-li-93bb3926/"><AiFillLinkedin /></TeamLink>
          <TeamLink href="mailto:annadan2005@yahoo.com"><AiOutlineMail /></TeamLink>
          <Card.Text>
          Former musician turned Junior Developer.
          </Card.Text>
        </Card.Body>
      </TeamCard>
    </Col>

    <Col>
      <TeamCard>
        <TeamImage variant="top" src="./images/image0.jpeg" />
        <Card.Body>
          <Card.Title>Hayley Mentz</Card.Title>
          <TeamLink href="https://github.com/HayleyMentz"><AiFillGithub /></TeamLink>
          <TeamLink href="https://www.linkedin.com/in/hayley-mentz-75713219/"><AiFillLinkedin /></TeamLink>
          <TeamLink href="mailto:hayley.mentz@gmail.com"><AiOutlineMail /></TeamLink>
          <Card.Text>
          Former Research Scientist turned Junior Developer.
          </Card.Text>
        </Card.Body>
      </TeamCard>
    </Col>

    <Col>
      <TeamCard>
        <TeamImage variant="top" src="" />
        <Card.Body>
          <Card.Title>Abdirahman Mohamed</Card.Title>
          <TeamLink href="https://github.com/briankershisnik"><AiFillGithub /></TeamLink>
          <TeamLink href="mailto:bkershis@gmail.com"><AiOutlineMail /></TeamLink>
          <Card.Text>
          
          </Card.Text>
        </Card.Body>
      </TeamCard>
    </Col>

    <Col>
      <TeamCard>
        <TeamImage variant="top" src="" />
        <Card.Body>
          <Card.Title>Heidi Villa</Card.Title>
          <TeamLink href="https://github.com/briankershisnik"><AiFillGithub /></TeamLink>
          <TeamLink href="mailto:bkershis@gmail.com"><AiOutlineMail /></TeamLink>
          <Card.Text>
         
          </Card.Text>
        </Card.Body>
      </TeamCard>
    </Col>  
  </Row>       
</Container>
)

export default Team;