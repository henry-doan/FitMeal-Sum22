import { Link } from 'react-router-dom';
import { Container, Row, Card, Col, Image, Footer} from 'react-bootstrap';

const LandingPage = () => (
 <>

<Header>
<Link to='/'>
  Return Home
</Link>
</Header>

      <Container>

      <h1>FitMeal App Sum22</h1>
    
      <img class="background-image: url('https://unsplash.com/photos/0zkJ1EsH9dY')" />

      <Row>
  <Col>
  <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.body>
    <Card.Title>Exercises</Card.Title>
    <p>Find Popular Workouts</p>
  </Card.body>
</Card>
</Col>   
          

  <Col>
  <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.body>
    <Card.Title>Workouts</Card.Title>
    <p>Log Your Workouts!</p>
  </Card.body>
</Card>
</Col>
      

  <Col>
  <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.body>
    <Card.Title>Timer</Card.Title>
    <p>Use Modern Tools to Get Into Shape!</p>
  </Card.body>
</Card>
</Col>
    </Row>
</Container>

<Footer>
  <h3>DevPoint Labs Part-Time Summer 2022 Cohort</h3>
</Footer>
</>

)

export default LandingPage;