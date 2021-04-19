import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { ListGroup } from 'react-bootstrap'

const TypeBar = () => {
  const {device} = useContext(Context)

  return (
    <ListGroup className="mt-2">
      {device.types.map(type =>
        <ListGroup.Item
          key={type.id}
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          style={{cursor: 'pointer'}}
        >
          { type.name }
        </ListGroup.Item>
      )}
    </ListGroup>
  )
}

export default observer(TypeBar)
