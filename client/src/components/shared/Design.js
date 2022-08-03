import React from 'react'
import { Card, Container, Row, Col, Button, Table } from 'react-bootstrap'
import {
  WorkoutExerciseText,
  BackToChallenge,
  WorkoutCard,
  ExerciseListTble,
  ExerciseCardInfo,
  WorkoutShowSidebar
} from '../../components/shared/Styles'
import { Link } from 'react-router-dom'

const Design = () => {
  return (
    <div>
      <Link to="/">
        <BackToChallenge> Back to Challenges</BackToChallenge>
      </Link>
      <Container>
        <Row>
          <Col>
            <WorkoutCard>
              <img
                src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                width="568px"
                height="400px"
              />
              <WorkoutExerciseText>Workout Exercise</WorkoutExerciseText>
            </WorkoutCard>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Sets</th>
                  <th>Reps</th>
                </tr>
              </thead>
            </Table>
            <ExerciseListTble>
              <img
                style={{ borderRadius: '25px' }}
                src="https://images.unsplash.com/photo-1652363722833-509b3aac287b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                width="100px"
                height="100px"
              />
              <ExerciseCardInfo>
                <div>
                  <h5>Bench Press</h5>
                  <p className="text-muted">Chest</p>
                </div>
                <div style={{ display: 'flex', gap: '130px' }}>
                  <h4>5</h4>
                  <h4>6</h4>
                </div>
              </ExerciseCardInfo>
            </ExerciseListTble>
          </Col>
          <Col>
          <WorkoutShowSidebar>
            <div>
              <h4>Bench Press Mania</h4>
            </div>
            <div>
              <p>
                Join the virtual cycling challenge together with your friends,
                starts on 27 September 2021.
              </p>
            </div>
            <div>
              <h5>Estimated Time</h5>
              <p>8000 Min.</p>
            </div>
            <div>
              <h4>About Challenge</h4>
              <p>
                Join the virtual cycling challenge between 27 September and 30
                September 2021. The ride will very small and limited and we
                partner with while all social distancing best practices will
                take place. You'll get a celebratory finisher's badge plus
                race-ready legs!
              </p>
            </div>
            <div>
              <Button variant="dark">Start Workout</Button>
              <Button variant="light">Check Exercises</Button>
            </div>
            </WorkoutShowSidebar>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Design
