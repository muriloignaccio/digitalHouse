import React, { useState } from 'react';
import {
  Modal,
  Button,
  ButtonGroup,
  InputGroup,
  FormControl,
  ToggleButton,
} from 'react-bootstrap';

export default ({ show, handleClick, handleSubmit, handlePets }) => {
  const [gender, setGender] = useState('Fêmea');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleGenderChange = (value) => setGender(value);
  const handleNameChange = (value) => setName(value);
  const handleAgeChange = (value) => setAge(value);
  const handleAvatarChange = (value) => setAvatar(value);

  return (
    <>
      <Modal show={show} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastre um novo pet!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon1'>Nome</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder='Nome do Pet'
              aria-label='Username'
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
