import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import Flash from '../shared/Flash';
import { Container, Form, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MainLoginBtn, LinkColors, BtnWhiteTxt, Outer, Inner, Input, PaddingS } from '../styles/Styles';



const Login = ({ handleLogin, errors, setErrors }) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user)
    setUser({ email: '', password: '' })
  }

  return (
    <>
    <Outer>
      { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        :
        null
      }
      <PaddingS>
      <Inner onSubmit={handleSubmit}>
      <h3 className='mb-4 login-text'>Login</h3 >
      <Form.Group className="form-group mb-4">
      
        <Input className="form-control"
          placeholder='Email'
          name='email'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type='email'
          required
        />
        </Form.Group> 
        <Form.Group className="form-group mb-4">
        
        <Input className="form-control"
          placeholder='Password'
          name='password'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type='password'
          required
        />
        </Form.Group>
        <Row>
        <BtnWhiteTxt type="submit">
          Login
      </BtnWhiteTxt>
      
      </Row>

      <PaddingS>Don't Have an Account? <LinkColors to='/register'>Sign Up</LinkColors></PaddingS>
      </Inner>
      </PaddingS>
      </Outer>
      

    </>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedLogin;
