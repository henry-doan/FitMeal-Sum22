import { Link } from 'react-router-dom';

const LandingPage = () => (
<>


<Link to='/'>
  Return Home

</Link>
<link rel="stylesheet" href="style.css"></link>
<div class="header">
      <div class="container">
        
      </div>
    </div>

    <div class="jumbotron">
      <div class="container">  
        <div class="main">
          <h1>FitMeal App Sum22</h1>
          

        </div>
      </div>
    </div>

    <div class="supporting">
      <div class="container">
        <div class="col">
          <img src="https://unsplash.com/photos/0zkJ1EsH9dY"/>
          <h2>Exercises</h2>
          <p>Find popular exercises.</p>
          <a class="btn-default" href="#">Learn more</a>
        </div>
        <div class="col">
          <img src="https://unsplash.com/photos/0zkJ1EsH9dY"/>
          <h2>Workouts</h2>
          <p>Log workouts!</p>
          <a class="btn-default" href="#">Learn more</a>
        </div>
        <div class="col">
          <img src="https://unsplash.com/photos/0zkJ1EsH9dY"/>
          <h2>Timer</h2>
          <p>Use modern tools to get into shape.</p>
          <a class="btn-default" href="#">Learn more</a>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>

    <div class="footer">
      <div class="container">
        <p>&copy; DevPoint Labs Part-time Sum 22 Cohort</p>
      </div>
    </div>
</>

)

export default LandingPage;