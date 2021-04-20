import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userAPI'

const Auth = () => {
	const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
	const isLogin = location.pathname === LOGIN_ROUTE

  const submitAuthReg = async () => {
	  return isLogin ? await login(email, password) : await registration(email, password)
  }

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ height: window.innerHeight - 54 }}
		>
			<Card style={{ width: 600 }} className="p-5">
				<h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
				<Form className="d-flex flex-column">
					<Form.Control
            className="mt-3"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

					<Form.Control
            type="password"
            className="mt-3"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

					<Row className="d-flex justify-content-between mt-3 pr-3 pl-3">
						{isLogin ? (
							<div>
								Don't have an account yet?
								<NavLink to={REGISTRATION_ROUTE}> Register here...</NavLink>
							</div>
						) : (
							<div>
								Already have an account?
								<NavLink to={LOGIN_ROUTE}> Login here...</NavLink>
							</div>
						)}
						<Button
              variant={'outline-success'}
              onClick={submitAuthReg}
            >
							{isLogin ? 'Enter' : 'Register'}
						</Button>
					</Row>
				</Form>
			</Card>
		</Container>
	)
}

export default Auth
