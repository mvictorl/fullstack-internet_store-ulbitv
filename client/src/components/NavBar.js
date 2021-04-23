import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'

const NavBar = observer(() => {
	const { user } = useContext(Context)
	const history = useHistory()

	function logOut() {
		user.setUser({})
		user.setIsAuth(false)
	}

	return (
		<Navbar bg="primary" variant="dark">
			<Container>
				<NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
					Online Shop
				</NavLink>
				{user.isAuth ? (
					<Nav className="ml-auto" style={{ color: 'white' }}>
						<Button
							variant={'outline-light'}
							onClick={() => history.push(ADMIN_ROUTE)}
						>
							Admin panel
						</Button>
						<Button variant={'outline-light'} onClick={logOut} className="ml-2">
							Exit
						</Button>
					</Nav>
				) : (
					<Nav className="ml-auto" style={{ color: 'white' }}>
						<Button
							variant={'outline-light'}
							onClick={() => history.push(LOGIN_ROUTE)}
						>
							Authorization
						</Button>
					</Nav>
				)}
			</Container>
		</Navbar>
	)
})

export default NavBar
