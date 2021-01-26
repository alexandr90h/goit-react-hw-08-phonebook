import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './modalEdit.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import contactsAction from '../redux/action';
import * as operation from "../redux/operation";

export default function ModalEdit() {
    const schema = yup.object().shape({
        name: yup.string().required(),
        number:yup.number().required(),
            })
    
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });
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
        <div className={styles.modalOverlay}>
                    <form onSubmit={handleSubmit(hendleOnSubmite)} className={styles.mainForm}>
                <label>Name 
            <input type="text" name="name" autoComplete="off" value={name} onChange={hendleInputChanga} ref={register} />
                 </label>
                 {errors.name && <p>{errors.name.message}</p>}
                <label>Number
                     <input type="text" name="number" autoComplete="off" value={number} onChange={hendleInputChanga} ref={register}/>
                 </label>
                 {errors.number && <p>{ errors.number.message}</p>}
                <button type="submit">Save contact</button>
        </form>
        </div>
    )
};
