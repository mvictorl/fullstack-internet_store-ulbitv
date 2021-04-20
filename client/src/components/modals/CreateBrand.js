import React from 'react'
import { Form, Modal, Button } from 'react-bootstrap'

const CreateBrand = ({ show, onHide }) => {
	return (
		<Modal size="lg" centered show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add new Brand of device
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control placeholder={'new Brand'} />
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

export default CreateBrand
