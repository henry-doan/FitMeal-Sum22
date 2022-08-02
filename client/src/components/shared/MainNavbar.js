import { Link } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Container, Navbar, Button, Nav} from 'react-bootstrap';
import { MainLoginBtn, LinkColors, BtnWhiteTxt, UserProfileNavImg, NavLine, NavbarLine } from '../styles/Styles';
import logo from '../styles/Photos/Logo.png';

const MainNavbar = ({ user, handleLogout }) => {
  const rightNavItems = () => {
    // links to show up if the user is logged in
    if (user) {
      return (
        <>
          <Nav.Link>
            <LinkColors to='/workouts'>Workouts</LinkColors>
          </Nav.Link>
          <Nav.Link>
            <LinkColors to='/profile'>Profile</LinkColors>
          </Nav.Link>
          <Nav.Link onClick={() => handleLogout() }>
           
            Logout
          </Nav.Link>
          <Navbar.Text>
            <UserProfileNavImg
              alt="Profile Image"
              src={user.image}
              width="70px"
              height="70px"
              />
            
          </Navbar.Text>
        </>
      )
    } else {
      // links to show up when they are not logged in
      return (
        <>
          <Nav.Link>
            <LinkColors to='/team'>Team</LinkColors>
          </Nav.Link>
          <Link to='/register'>
            <MainLoginBtn>
              Sign Up
            </MainLoginBtn>
          </Link>
          <Link to='/login'>
            <BtnWhiteTxt>
              Log In
            </BtnWhiteTxt>
          </Link>
        </>
      )
    }
  }

  return (
    <>
      {/* this will display regardless if you are logged in or not */}

      <NavbarLine expand="sm">
   
        <Navbar.Brand>
        <img className='nav-logo'
              alt="logo"
              src={logo}
              width="70px"
              />
          </Navbar.Brand>
          
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse className="justify-content-end">
        { rightNavItems() }
        </Navbar.Collapse>
   
    </NavbarLine>
    
    </>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer>{(value) => <MainNavbar {...props} {...value} />}</AuthConsumer>
)

export default ConnectedMainNavbar;
