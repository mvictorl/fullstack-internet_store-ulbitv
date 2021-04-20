import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Card, Row } from 'react-bootstrap'
import { Context } from '..'

const BrandBar = () => {
	const { device } = useContext(Context)

	return (
		<Row className="d-flex">
			{device.brands.map(brand => (
				<Card
					key={brand.id}
					border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
					className="p-3"
					style={{ cursor: 'pointer' }}
					onClick={() => device.setSelectedBrand(brand)}
				>
					{brand.name}
				</Card>
			))}
		</Row>
	)
}

export default observer(BrandBar)
