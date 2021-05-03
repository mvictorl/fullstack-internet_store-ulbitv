import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Col, Container, Row } from 'react-bootstrap'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import TypeBar from '../components/TypeBar'
import { Context } from '..'
import { fetchTypes } from '../http/deviceAPI'

const Shop = () => {
	const { device } = useContext(Context)

	useEffect(() => {
		fetchTypes().then(data => device.setTypes(data))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Container>
			<Row className="mt-2">
				<Col md={3}>
					<TypeBar />
				</Col>

				<Col md={9}>
					<BrandBar />
					<DeviceList />
				</Col>
			</Row>
		</Container>
	)
}

export default observer(Shop)
