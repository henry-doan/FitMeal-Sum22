import {Button, Container, Modal, Carousel} from 'react-bootstrap';

const WorkoutHeader = ()=>(



<>
{/* <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1657299156653-d3c0147ba3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1658933865028-34dcbf51bc68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel> */}
<header style={{ backgroundImage: "url('')"}} >
    <div className='p-5 text-center bg-image' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', height: '400px' }}>

        <div className='mask'>
          <div className='d-flex h-100'>
            <div className='text-white'>
            <h4 className='mb-3'>Find the workout that works for you</h4>
            {/* <h1 className='mb-3'>Heading</h1> */}

  
            </div>
          </div>
        </div>
      </div>
    </header>
</>


)
export default WorkoutHeader;

