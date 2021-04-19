import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ height: window.innerHeight - 54 }}
		>
			<Card style={{ width: 600 }} className="p-5">
				<h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
				<Form className="d-flex flex-column">
					<Form.Control className="mt-3" placeholder="email" />

					<Form.Control className="mt-3" placeholder="password" />

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
						<Button variant={'outline-success'}>
							{isLogin ? 'Enter' : 'Register'}
						</Button>
					</Row>
				</Form>
			</Card>
		</Container>
	)
}

export default Auth
