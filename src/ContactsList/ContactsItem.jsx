import styles from './contactsItem.module.scss';
import PropTypes from 'prop-types';
import { VscTrash, VscEdit } from "react-icons/vsc";
import * as operation from "../redux/operation";
import { useDispatch } from "react-redux";
import contactsAction from '../redux/action';

export default function ContactsListItem(props) {
    const dispatch = useDispatch(); 
    // const ModalVisible = useSelector(state => state.state)
    return (
        <li key={props.id} className={styles.contactItem}>
            <div className={styles.contentItem}>
                <span className={styles.nameItem}>{props.name}: </span>
                <span className={styles.phonItem}>{props.number}</span>
            </div>
            <div className={styles.buttonConteiner}>
                <button onClick={async() => {await dispatch(operation.getContactsById(props.id)); dispatch(contactsAction.modalVisible(true));}} ><VscEdit/></button>
                <button onClick={() => dispatch(operation.delContacts(props.id))}><VscTrash/></button>
            </div>
        </li>
    )
}
ContactsListItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    id:PropTypes.number,
    onBtnDelId:PropTypes.func,
}