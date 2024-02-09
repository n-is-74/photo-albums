import React, { useState } from 'react';
import { Dropdown, Modal } from 'react-bootstrap';
import AddAlbumForm from './AddAlbumForm';

export default function CreateAlbum({ users }) {
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
          <AddAlbumForm users={users} setShowFormModal={setShowFormModal} />
        </Modal.Body>
      </Modal>
    </div>
  );
}
