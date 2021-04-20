import React, { useContext, useState } from 'react'
import { Form, Modal, Button, Dropdown, Row, Col } from 'react-bootstrap'
import { Context } from '../..'

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context)
  const [ info, setInfo ] = useState([])
  const [file, setFile] = useState(null)

  const addInfo = () => {
    setInfo([ ...info, { title: '', description: '', number: Date.now() } ])
  }
  const removeInfo = number => {
    setInfo(info.filter(el => el.number !== number))
  }

  return (
    <Modal size="lg" centered show={ show } onHide={ onHide }>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new Device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="d-flex justify-content-around">
            <Dropdown className="m-2">
              <Dropdown.Toggle>Select the Type</Dropdown.Toggle>
              <Dropdown.Menu>
                { device.types.map(type => (
                  <Dropdown.Item key={ type.id }>{ type.name }</Dropdown.Item>
                )) }
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="m-2">
              <Dropdown.Toggle>Select the Brand</Dropdown.Toggle>
              <Dropdown.Menu>
                { device.brands.map(brand => (
                  <Dropdown.Item key={ brand.id }>{ brand.name }</Dropdown.Item>
                )) }
              </Dropdown.Menu>
            </Dropdown>
          </Row>

          <Form.Control
            className="m-2"
            placeholder="Input device Name"
          />

          <Form.Control
            type="number"
            className="m-2"
            placeholder="Input device Price"
          />

          <Form.File
            className="m-2"
            label={ file ? file.name : 'Choose Image...' }
            custom
            onChange={e => setFile(e.target.files[0])}
          />

          <hr/>

          <Button
            variant={ 'outline-dark' }
            size="sm"
            className="m-2"
            onClick={ addInfo }
          >
            Add new Characteristic
          </Button>
          { info.map(i =>
            <Row className="mt-3" key={i.number}>
              <Col md={ 5 }>
                <Form.Control
                  placeholder="Title"
                />
              </Col>

              <Col md={ 5 }>
                <Form.Control
                  placeholder="Value"
                />
              </Col>

              <Col md={ 2 }>
                <Button
                  variant={ 'outline-danger' }
                  onClick={() => removeInfo(i.number)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ) }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={ onHide }>
          Close
        </Button>
        <Button variant="outline-success" onClick={ onHide }>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDevice
