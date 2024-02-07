import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function AddAlbumForm({ user }) {
  console.log(user);
  const [album, setAlbum] = useState('');
  const [userUniqueValue, setUserUniqueValue] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [show, setShow] = useState(false);

  const changeHandlerName = (e) => setAlbum(e.target.value);
  const changeHandlerUserUniqueValue = (e) => setUserUniqueValue(e.target.value);
  const handleChangePrivacy = (e) => {
    setIsPrivate(e.target.value === 'true');
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      album === '' ||
      (isPrivate && userUniqueValue !== '' && !user.find((u) => u.email === userUniqueValue))
    ) {
      handleShow();
    } else {
      await axios.post('/api/album', {
        name: album,
        privates: !!isPrivate,
        userUniqueValue,
      });
    }
  };

  return (
    <>
      <Form className="m-3" onSubmit={handleSubmit}>
        <Col xs={3}>
          <Form.Group className="mb-3" controlId="album">
            <Form.Label>Album</Form.Label>
            <Form.Control
              value={album}
              onChange={changeHandlerName}
              type="text"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="albumOpisanie">
            <Form.Label>Выберите приватность</Form.Label>
            <Form.Select value={isPrivate.toString()} onChange={handleChangePrivacy} name="private">
              <option value="true">Приватный</option>
              <option value="false">Публичный</option>
              {/* <option value="true">Открыть доступ пользователю</option> */}
            </Form.Select>
          </Form.Group>
          {isPrivate && (
            <Form.Group className="mb-3" controlId="additionalInput">
              <Form.Label>Введите уникальное значение пользователя</Form.Label>
              <Form.Control
                type="text"
                value={userUniqueValue}
                onChange={changeHandlerUserUniqueValue}
                placeholder="Ввод"
              />
            </Form.Group>
          )}
          <Col xs={3}>
            <Button type="submit">Добавить</Button>
          </Col>
        </Col>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ошибка</Modal.Title>
        </Modal.Header>
        <Modal.Body>Пожалуйста, заполните все поля</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
