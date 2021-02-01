import { useState } from 'react';
import styles from './modalEdit.module.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { VscDeviceMobile } from 'react-icons/vsc';
import { getModalVisible } from '../redux/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import contactsAction from '../redux/action';
import * as operation from '../redux/operation';

export default function ModalEdit() {
  const dispatch = useDispatch();
  const itemById = useSelector(state => state.contacts.itemById);
  const [name, setName] = useState(itemById.name);
  const [number, setNumber] = useState(itemById.number);
  const hendleInputChanga = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleClose = () => dispatch(contactsAction.modalVisible(false));

  const hendleOnSubmit = e => {
    e.preventDefault();
    dispatch(operation.saveContacts(itemById.id, { name, number }));
    handleClose();
  };

  return (
    <Modal
      show={useSelector(getModalVisible)}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <form onSubmit={hendleOnSubmit}>
        <Modal.Body>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" srOnly>
                Name
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Name"
                autoComplete="off"
                onChange={hendleInputChanga}
                name="name"
                value={name}
              />
            </Col>
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                Username
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <VscDeviceMobile className={styles.MobileIcon} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="Number"
                  autoComplete="off"
                  onChange={hendleInputChanga}
                  name="number"
                  value={number}
                />
              </InputGroup>
            </Col>
          </Form.Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
