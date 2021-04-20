import React, { useContext } from 'react'
import { Form, Modal, Button, Dropdown } from 'react-bootstrap'
import { Context } from '../..'

const CreateDevice = ({ show, onHide }) => {
	const { device } = useContext(Context)

	return (
		<Modal size="lg" centered show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add new Device
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown>
						<Dropdown.Toggle>Select the Type</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map(type => (
								<Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>
					Close
				</Button>
				<Button variant="outline-success" onClick={onHide}>
					Add
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CreateDevice
