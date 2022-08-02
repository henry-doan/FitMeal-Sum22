import styled from 'styled-components'
import { Button, Card, Form, Container, Navbar, Col, Image, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const MainLoginBtn = styled(Button)`
color: #084C26 !important;
border-color:#084C26 !important;
background-color: white;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px;
  :hover {
    background-color: #084C26;
    color: white !important;
  }

`

export const BtnWhiteTxt = styled(Button)`
color: white !important;
background-color: #084C26 !important;
border-color:#084C26 !important;


 
`

export const LinkColors = styled(Link)`
color: #084C26 !important;
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
text-transform: uppercase;
text-decoration: none;
padding: 10px;
`


// Form login/Reg
export const MainImg = styled(Image)`
background: #F9FAFB;
height: 100%;

`
export const Outer  = styled(Container)`

margin-top: 5%;
padding-bottom 20%;
padding-left: 10%;
padding-right: 10%;
`

export const Inner  = styled(Form)`
width: 100%;
height: 100%;

`
export const Input  = styled.input`
background: #F9FAFB;
border: 1px solid #E5E6EB;
border-radius: 8px;
`
export const SignupPadding  = styled.p`

position: absolute;
margin-top: 2%;
padding-left: 5%;
`

export const PaddingS  = styled.p`
padding: 5%;

`



// Footer styles
export const FootLine  = styled.footer`
max-width: 100%
background: #FFFFFF;
border-top:  1px solid rgba(0, 32, 104, 0.08);
`
export const FootSpace  = styled.p`
display: flex;
`

export const FootName  = styled.span`
color: #084C26;
font-style: normal;
font-weight: 900;
font-size: 20px;
`

export const FootLinks  = styled(Link)`
text-decoration: none;
color: #545454;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 15px;
`

// Navbar styles
export const NavbarLine  = styled(Navbar)`
border-bottom:  1px solid rgba(0, 32, 104, 0.08);

`

export const UserProfileNavImg  = styled.img`
border-radius:50%
`

//Workout Cards styles 
export const WorkoutCard = styled(Card)`
margin: 5%;

`

export const WorkoutCardOverlay = styled(Card.ImgOverlay)`
background: #d9d9d92a;
border-radius: 10px;
  
  :hover {
    background-color:  rgba(0, 0, 0, 0.4)!important;
  
  }
`
export const WorkoutCardTitle = styled(Card.Title)`
color: black;
padding: 5px;
position: left bottom;

background: #FFFFFF;
border-radius: 10px;

`




export const PaginationGreen = styled(Pagination.Item)`
color: #084C26 !important;
border-color:#084C26 !important;
background-color: white;

padding: 10px;
`