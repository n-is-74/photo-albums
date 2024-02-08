import React, { useState } from 'react';
import { Button, Dropdown, Modal } from 'react-bootstrap';
import AddAlbumForm from '../ui/AddAlbumForm';

export default function AlbomPage({ user }) {
  const [showFormModal, setShowFormModal] = useState(false);

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Создать
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setShowFormModal(true)}>Создать Альбом</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Modal show={showFormModal} onHide={() => setShowFormModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Создание Альбома</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddAlbumForm user={user} />
        </Modal.Body>
      </Modal>
    </div>
  );
}
