import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import DeviceItem from './DeviceItem'
import { Row } from 'react-bootstrap'

const DeviceList = () => {
	const { device } = useContext(Context)

	return (
		<Row className="d-flex">
			{device.devices.map(device => (
				<DeviceItem key={device.id} device={device} />
			))}
		</Row>
	)
}

export default observer(DeviceList)
