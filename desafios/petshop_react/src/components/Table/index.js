import React from 'react';
import { Table } from 'react-bootstrap';

export default ({ data }) => (
	<Table striped bordered hover variant='dark'>
		<thead>
			<tr>
				<th>#</th>
				<th>Nome</th>
				<th>Gênero</th>
				<th>Idade</th>
			</tr>
		</thead>
		<tbody>
			{data.map(({ id, name, gender, age }) => (
				<tr key={id}>
					<td>{id}</td>
					<td>{name}</td>
					<td>{gender}</td>
					<td>{age}</td>
				</tr>
			))}
		</tbody>
	</Table>
);
