import React from 'react'
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
	const device = {
		id: 1,
		name: 'Iphone 12 Pro',
		price: 25000,
		rating: 5,
		img:
			'https://icdn.lenta.ru/images/2020/10/22/15/20201022151630776/detail_af233b21da0abc6152c36f21200d79ad.jpg'
	}

	const description = [
		{ id: 1, title: 'Оперативная память', description: '5 Гб' },
		{ id: 2, title: 'Камера', description: '12 Мп' },
		{ id: 3, title: 'Процессор', description: 'Intel Razor' },
		{ id: 4, title: 'Кол-во ядер', description: '4' },
		{ id: 5, title: 'Аккумулятор', description: '4500' }
	]

	return (
		<Container className="mt-3">
			<Row>
				<Col md={4} className="d-flex justify-content-center">
					<Image width={300} height={300} src={device.img} />
				</Col>

				<Col md={4}>
					<Row className="d-flex flex-column align-items-center">
						<h2>{device.name}</h2>
						<div
							className="d-flex align-items-center justify-content-center"
							style={{
								background: `url(${bigStar}) no-repeat center center`,
								width: 240,
								height: 240,
								backgroundSize: 'cover',
								fontSize: 64
							}}
						>
							{device.rating}
						</div>
					</Row>
				</Col>

				<Col md={4}>
					<Card
						className="d-flex flex-column align-items-center justify-content-around"
						style={{
							width: 300,
							height: 300,
							fontSize: 32,
							border: '5px solid lightgray'
						}}
					>
						<h3>От: {device.price} руб.</h3>
						<Button variant={'outline-dark'}>Добавить в корзину</Button>
					</Card>
				</Col>
			</Row>
			<Row className="d-flex flex-column m-3">
				<h3>Характеристики</h3>
				{description.map((info, index) => (
					<Row
						key={info.id}
						style={{
							background: index % 2 === 0 ? '#eee' : 'transparent',
							padding: 10
						}}
					>
						{info.title}: {info.description}
					</Row>
				))}
			</Row>
		</Container>
	)
}

export default DevicePage
