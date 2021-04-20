import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
// import { Star } from 'react-bootstrap-icons'
import { useHistory } from 'react-router'
import { DEVICE_ROUTE } from '../utils/consts'
import star from '../assets/star.png'

const DeviceItem = ({ device }) => {
	const history = useHistory()

	return (
		<Col
			md={3}
			className="mt-3"
			onClick={() => history.push(`${DEVICE_ROUTE}/${device.id}`)}
		>
			<Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
				<Image
					width={150}
					height={150}
					src={device.img}
					className="img-responsive"
				/>
				<div className="d-flex justify-content-between align-items-center text-black-50">
					<div>Samsung...</div>
					<div className="d-flex align-items-center mt-1">
						<div>{device.rating}</div>
						<Image width={18} height={18} className="ml-1" src={star} />
					</div>
				</div>
				<div>{device.name}</div>
			</Card>
		</Col>
	)
}

export default DeviceItem
