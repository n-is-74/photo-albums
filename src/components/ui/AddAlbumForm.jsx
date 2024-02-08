import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';

export default function AddAlbumForm({ users, setShowFormModal }) {
  const [album, setAlbum] = useState('');
  const [userUniqueValue, setUserUniqueValue] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [userNotFoundError, setUserNotFoundError] = useState(false);

  const changeHandlerName = (e) => setAlbum(e.target.value);
  const changeHandlerUserUniqueValue = (e) => setUserUniqueValue(e.target.value);
  const handleChangePrivacy = (e) => setIsPrivate(e.target.value === 'true');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (album === '') {
      return;
    }

    if (isPrivate && userUniqueValue !== '' && !users.find((u) => u.email === userUniqueValue)) {
      setUserNotFoundError(true);
      return;
    }

    await axios.post('/api/album', {
      name: album,
      privates: isPrivate,
      userUniqueValue,
    });
    setShowFormModal(false);
  };

  return (
    <>
      <Form className="m-3" onSubmit={handleSubmit}>
        <Col xs={8}>
          <Form.Group className="mb-3" controlId="album">
            <Form.Label>Album</Form.Label>
            <Form.Control
              value={album}
              onChange={changeHandlerName}
              type="text"
              placeholder="Name"
            />
            {album === '' && <div className="text-danger m-3">Please fill in the Album field</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="albumOpisanie">
            <Form.Label>Choose privacy</Form.Label>
            <Form.Select value={isPrivate.toString()} onChange={handleChangePrivacy} name="private">
              <option value="true">Private</option>
              <option value="false">Public</option>
            </Form.Select>
          </Form.Group>
          {isPrivate && (
            <Form.Group className="mb-3" controlId="additionalInput">
              <Form.Label>
                Введите уникальный идентификатор пользователя, с которым вы хотите поделиться своим
                альбомом. Если вы оставляете поле пустым, альбом будет виден только вам.
              </Form.Label>
              <Form.Control
                type="text"
                value={userUniqueValue}
                onChange={changeHandlerUserUniqueValue}
                placeholder="Input"
              />
            </Form.Group>
          )}
          <Col xs={8}>
            <Button type="submit">Add</Button>
          </Col>
        </Col>
      </Form>
      {userNotFoundError && (
        <div className="text-danger m-3">
          Пользователь с указанным адресом электронной почты не найден. Пожалуйста, проверьте
          введенный адрес электронной почты.
        </div>
      )}
    </>
  );
}
