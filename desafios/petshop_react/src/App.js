import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Card, Header, Table, Title } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const pets = [
		{
			id: 1,
			name: 'Sansão',
			age: 3,
			gender: 'Macho',
			avatar:
				'https://images.pexels.com/photos/2326937/pexels-photo-2326937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		},
		{
			id: 2,
			name: 'Matias',
			age: 5,
			gender: 'Macho',
			avatar: 'https://images.dog.ceo/breeds/kelpie/n02105412_3084.jpg',
		},
		{
			id: 3,
			name: 'Maria Joaquina',
			age: 7,
			gender: 'Fêmea',
			avatar:
				'https://images.pexels.com/photos/1458953/pexels-photo-1458953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		},
		{
			id: 4,
			name: 'Dalila',
			age: 2,
			gender: 'Fêmea',
			avatar:
				'https://images.pexels.com/photos/1464518/pexels-photo-1464518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		},
		{
			id: 5,
			name: 'Sharpay',
			age: 4,
			gender: 'Fêmea',
			avatar:
				'https://images.pexels.com/photos/1292716/pexels-photo-1292716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		},
		{
			id: 6,
			name: 'Mariah Carey',
			age: 9,
			gender: 'Fêmea',
			avatar:
				'https://images.pexels.com/photos/1596578/pexels-photo-1596578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		},
	];
	const owners = [
		{
			id: 1,
			name: 'Hendy Sumida',
			age: 22,
			gender: 'Feminino',
		},
		{
			id: 2,
			name: 'Felipe Vazado',
			age: 21,
			gender: 'Masculino',
		},
		{
			id: 3,
			name: 'Erika com K',
			age: 19,
			gender: 'Feminino',
		},
		{
			id: 4,
			name: 'Agnys com vergonha',
			age: 20,
			gender: 'Feminino',
		},
	];

	return (
		<>
			<Header title='Petshop DH' />
			<Container>
				<Title title='Bixinhos' />
				<Row className='justify-content-md-around'>
					{pets.map((pet) => (
						<Col key={pet.id} md='auto'>
							<Card data={pet} />
						</Col>
					))}
				</Row>
				<Title title='Pessoas' />
				<Table data={owners} />
			</Container>
		</>
	);
}

export default App;
