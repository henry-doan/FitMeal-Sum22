import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const TeamTitle = styled.h1 `
color: #084C26;
font-size: 52 pixels;
font-family: 'roboto';
text-align: center;
`

export const TeamCard = styled(Card)`
color: #084C26;
font-family: 'roboto';
text-align: center;
height: 500px; 
width: 200px;
`

export const TeamLink = styled(Card.Link)`
color: #EF7E6D;
text-decoration: none;
`

export const TeamImage = styled(Card.Img)`
height: 275px;
`