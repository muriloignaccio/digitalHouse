import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default ({ name, handleClick, show, handleAdoption }) => (
	<>
		<Modal show={show} onHide={handleClick}>
			<Modal.Header closeButton>
				<Modal.Title>Atenção</Modal.Title>
			</Modal.Header>
			<Modal.Body>Tem certeza que quer adotar o pet {name}?</Modal.Body>
			<Modal.Footer>
				<Button variant='danger' onClick={handleClick}>
					Não (Vou pro inferno)
				</Button>
				<Button
					variant='success'
					onClick={() => {
						handleClick();
						handleAdoption();
					}}>
					Sim
				</Button>
			</Modal.Footer>
		</Modal>
	</>
);
