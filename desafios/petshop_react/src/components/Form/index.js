import React, { useState } from 'react';
import {
  Alert,
  Modal,
  Button,
  ButtonGroup,
  Card,
  Col,
  InputGroup,
  FormControl,
  Row,
  ToggleButton,
} from 'react-bootstrap';

export default ({ show, handleClick, handleSubmit, handlePets }) => {
  const [gender, setGender] = useState('Macho');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [avatar, setAvatar] = useState('');
  const [error, setError] = useState(false);

  const mockUpAvatar =
    'https://www.petinsurancereview.com/sites/default/files/styles/large/public/default_images/default_pet.jpg?itok=xSpT8Z_k';

  const handleGenderChange = (value) => setGender(value);
  const handleNameChange = (value) => setName(value);
  const handleAgeChange = (value) => setAge(value);
  const handleAvatarChange = (value) => setAvatar(value);
  const handleVerification = () => {
    return !(name && age && gender && avatar) || !Number(age);
  };

  return (
    <>
      <Modal show={show} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastre um novo pet!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Card className='flex-row mb-4'>
                <Card.Img
                  variant='top'
                  src={avatar ? avatar : mockUpAvatar}
                  style={{ width: '50%' }}
                />
                <Card.Body>
                  <Card.Title>{name ? name : 'Nome do Pet'}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    {!Number(age)
                      ? 'Idade do pet'
                      : Number(age) === 1
                      ? `${age} aninho`
                      : `${age} aninhos`}
                  </Card.Subtitle>
                  <Card.Text>{gender}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {error && (
            <Row>
              <Col>
                <Alert variant='danger'>
                  Todos os campos devem ser preenchidos corretamente!
                </Alert>
              </Col>
            </Row>
          )}
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon1'>Nome</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder='Nome do Pet'
              aria-label='Username'
              required
              aria-describedby='basic-addon1'
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
            />
          </InputGroup>

          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon1'>Idade</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder='Idade (Somente em números)'
              aria-label='Username'
              aria-describedby='basic-addon1'
              value={age}
              onChange={(e) => handleAgeChange(e.target.value)}
            />
          </InputGroup>

          <ButtonGroup className='d-flex mb-3' toggle>
            <ToggleButton
              type='radio'
              variant='primary'
              name='radio'
              value='Macho'
              checked={gender === 'Macho'}
              onChange={(e) => handleGenderChange(e.currentTarget.value)}
            >
              Macho
            </ToggleButton>
            <ToggleButton
              type='radio'
              variant='primary'
              name='radio'
              value='Fêmea'
              checked={gender === 'Fêmea'}
              onChange={(e) => handleGenderChange(e.currentTarget.value)}
            >
              Fêmea
            </ToggleButton>
          </ButtonGroup>

          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon3'>URL da foto</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id='basic-url'
              aria-describedby='basic-addon3'
              placeholder='Ex: https://example.com/users/'
              value={avatar}
              onChange={(e) => handleAvatarChange(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='success'
            onClick={() => {
              if (handleVerification()) return setError(true);
              handlePets({
                id: Math.ceil(Math.random() * 999),
                name,
                age,
                gender,
                avatar,
              });
              handleClick();
              handleSubmit();
            }}
          >
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
