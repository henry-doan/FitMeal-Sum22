import { Link } from 'react-router-dom'
import { AuthConsumer } from '../../providers/AuthProvider'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const MainNavbar = ({ user, handleLogout }) => {
  const rightNavItems = () => {
    // links to show up if the user is logged in
    if (user) {
      return (
        <div>
          {/* <Link to='/profile'>
            <li>Profile</li>
          </Link>
          <li onClick={() => handleLogout() }>
            Logout
          </li> */}

          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: '#fff',
                    letterSpacing: '8px',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 'bold',
                      color: '#265E55',
                      fontSize: '26px',
                    }}
                  >
                    Fit
                  </span>
                  Meals
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav
                  style={{
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Nav.Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/workouts" style={{ textDecoration: 'none' }}>
                      Workouts
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/trainings" style={{ textDecoration: 'none' }}>
                      Trainings
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                      Profile
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Button onClick={() => handleLogout()}>Logout</Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )
    } else {
      // links to show up when they are not logged in
      return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: '#fff',
                letterSpacing: '8px',
              }}
            >
              <span
                style={{
                  fontWeight: 'bold',
                  color: '#265E55',
                  fontSize: '26px',
                }}
              >
                Fit
              </span>
              Meals
            </Link>
          </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link >
                    <Link to="/login">
                      <Button> Login</Button>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/register">
                    <Button style={{background: '#265E55'}}> Register</Button>
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )
    }
  }

  return (
    <>
      <nav>
        <ul>
          {/* this will display regardless if you are logged in or not */}

          {rightNavItems()}
        </ul>
      </nav>
    </>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer>{(value) => <MainNavbar {...props} {...value} />}</AuthConsumer>
)

export default ConnectedMainNavbar
