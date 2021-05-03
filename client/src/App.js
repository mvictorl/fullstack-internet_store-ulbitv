import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { Context } from '.'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import { check } from './http/userAPI'

function App() {
	const { user } = useContext(Context)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
    console.log('App.js useEffect()...')
		check()
			.then(data => {
        console.log(data)
				user.setUser(true)
				user.setIsAuth(true)
			})
			.finally(() => setLoading(false))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (loading) {
		return (
			<Spinner
				animation={'border'}
				style={{
					position: 'absolute',
					top: '50vh',
					left: '50%'
				}}
			/>
		)
	}

	return (
		<BrowserRouter>
			<NavBar />
			<AppRouter />
		</BrowserRouter>
	)
}

export default observer(App)
