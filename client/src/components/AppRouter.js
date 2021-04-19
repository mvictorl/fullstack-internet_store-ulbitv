import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Context } from '..'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'

const AppRouter = () => {
	const { user } = useContext(Context)
	return (
		<Switch>
			{user.isAuth &&
				authRoutes.map(({ path, component }) => (
					<Route path={path} exact component={component} key={path} />
				))}
			{publicRoutes.map(({ path, component }) => (
				<Route path={path} exact component={component} key={path} />
			))}
			<Redirect to={SHOP_ROUTE} />
		</Switch>
	)
}

export default AppRouter
