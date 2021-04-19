import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'

const NavBar = observer(() => {
	const { user } = useContext(Context)
	return (
		<Navbar bg="primary" variant="dark">
			<Container>
				<NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
					Online Shop
				</NavLink>
				{user.isAuth ? (
					<Nav className="ml-auto" style={{ color: 'white' }}>
						<Button variant={'outline-light'}>Admin panel</Button>
						<Button variant={'outline-light'} className="ml-2">
							Enter
						</Button>
					</Nav>
				) : (
					<Nav className="ml-auto" style={{ color: 'white' }}>
						<Button
							variant={'outline-light'}
							onClick={() => user.setIsAuth(true)}
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
