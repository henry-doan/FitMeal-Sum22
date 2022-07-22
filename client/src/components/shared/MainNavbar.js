import { Link } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Container, Navbar, Button, Nav} from 'react-bootstrap';


const MainNavbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
    // links to show up if the user is logged in
    if (user) {
      return (
        <>
          <Nav.Link>
            <Link to='/workouts'>Workouts</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/profile'>Profile</Link>
          </Nav.Link>
          <Nav.Link onClick={() => handleLogout() }>
            Logout
          </Nav.Link>
        </>
      )
    } else {
      // links to show up when they are not logged in
      return (
        <>
          <Nav.Link>
            <Link to='/team'>Team</Link>
          </Nav.Link>
          <Link to='/register'>
            <Button variant='outline-primary'>
              Sign Up
            </Button>
          </Link>
          <Link to='/login'>
            <Button>
              Log In
            </Button>
          </Link>
        </>
      )
    }
  }

  return (
    <>
      {/* this will display regardless if you are logged in or not */}
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to='/'>
              <p>FitMeal</p>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            { rightNavItems() }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedMainNavbar;
