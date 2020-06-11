import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default ({
  id,
  name,
  handleClick,
  show,
  handleAdoption,
  anjos,
  handleAnjo,
  demonios,
  handleDemonio,
  handleDelete,
}) => (
  <>
    <Modal show={show} onHide={handleClick}>
      <Modal.Header closeButton>
        <Modal.Title>Atenção</Modal.Title>
      </Modal.Header>
      <Modal.Body>Tem certeza que quer adotar o pet {name}?</Modal.Body>
      <Modal.Footer>
        <Button
          variant='danger'
          onClick={() => {
            handleClick();
            handleDemonio(demonios + 1);
          }}
        >
          Não (Vou pro inferno)
        </Button>
        <Button
          variant='success'
          onClick={() => {
            handleAnjo(anjos + 1);
            handleClick();
            handleAdoption();
            handleDelete(id);
          }}
        >
          Sim
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
