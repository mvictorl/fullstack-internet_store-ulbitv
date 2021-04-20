import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'
import CreateType from '../components/modals/CreateType'

const Admin = () => {
	const [deviceModalVisible, setDeviceModalVisible] = useState(false)
	const [brandModalVisible, setBrandModalVisible] = useState(false)
	const [typeModalVisible, setTypeModalVisible] = useState(false)

	return (
		<Container className="d-flex flex-column">
			<Button
				variant={'outline-dark'}
				className="mt-3 pt-2"
				onClick={() => setTypeModalVisible(true)}
			>
				Add Type of device
			</Button>
			<Button
				variant={'outline-dark'}
				className="mt-3 pt-2"
				onClick={() => setBrandModalVisible(true)}
			>
				Add Brand of device
			</Button>
			<Button
				variant={'outline-dark'}
				className="mt-3 pt-2"
				onClick={() => setDeviceModalVisible(true)}
			>
				Add the device
			</Button>
			<CreateDevice
				show={deviceModalVisible}
				onHide={() => setDeviceModalVisible(false)}
			/>
			<CreateBrand
				show={brandModalVisible}
				onHide={() => setBrandModalVisible(false)}
			/>
			<CreateType
				show={typeModalVisible}
				onHide={() => setTypeModalVisible(false)}
			/>
		</Container>
	)
}

export default Admin
