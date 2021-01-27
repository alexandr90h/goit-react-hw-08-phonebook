import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import styles from './modalEdit.module.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import contactsAction from '../redux/action';
import * as operation from "../redux/operation";

export default function ModalEdit() {
    // const schema = yup.object().shape({
    //     name: yup.string().required(),
    //     number:yup.number().required(),
    //         })
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const dispatch = useDispatch();
    // const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });
    const itemById = useSelector(state => state.itemById);
    const [name, setName] = useState(itemById.name);
    const [number, setNumber] = useState(itemById.number);

        const hendleInputChanga = e => {
        switch (e.target.name) {
            case 'name': setName(e.target.value)
                break;
            case 'number': setNumber(e.target.value)
                break;
            default:
                break;
        }
    }
    const hendleOnSubmite=()=> {
        dispatch(operation.saveContacts(itemById.id, name, number));
        dispatch(contactsAction.modalVisible(false));
    }

    return (
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <form onSubmit={hendleOnSubmite}>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
                <Button variant="primary" >Save</Button>
            </Modal.Footer>
            </form>
      </Modal>
    )
};
