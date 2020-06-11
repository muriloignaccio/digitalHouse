import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Modal, SuccessMessage } from '../';

export default ({
  data: { id, name, age, gender, avatar },
  anjos,
  handleAnjo,
  demonios,
  handleDemonio,
  handleDelete,
  handleAdoption,
}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Card style={{ width: '18rem', margin: '0 0 40px 0' }}>
        <Card.Img variant='top' src={avatar} style={{ height: 200 }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>{`${age} aninhos`}</Card.Subtitle>
          <Card.Text>{gender}</Card.Text>
          <Button block onClick={() => handleClick()} variant='primary'>
            Me adota!!1!
          </Button>
        </Card.Body>
      </Card>
      {show && (
        <Modal
          handleClick={handleClick}
          handleAnjo={handleAnjo}
          handleDemonio={handleDemonio}
          handleDelete={handleDelete}
          anjos={anjos}
          demonios={demonios}
          handleAdoption={handleAdoption}
          id={id}
          show={show}
          name={name}
        />
      )}
    </>
  );
};
