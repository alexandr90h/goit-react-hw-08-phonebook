import styles from './contactsItem.module.scss';
import PropTypes from 'prop-types';
import { VscTrash, VscEdit } from 'react-icons/vsc';
import * as operation from '../redux/operation';
import { useDispatch } from 'react-redux';
import contactsAction from '../redux/action';

export default function ContactsListItem(props) {
  const dispatch = useDispatch();
  // const ModalVisible = useSelector(state => state.state)
  return (
    <tr key={props.id}>
      <td lg="2">{props.n}</td>
      <td>{props.name}</td>
      <td>{props.number}</td>
      <td className={styles.buttonConteiner}>
        <button
          onClick={async () => {
            await dispatch(operation.getContactsById(props.id));
            dispatch(contactsAction.modalVisible(true));
          }}
        >
          <VscEdit />
        </button>
        <button onClick={() => dispatch(operation.delContacts(props.id))}>
          <VscTrash />
        </button>
      </td>
    </tr>
  );
}
ContactsListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onBtnDelId: PropTypes.func,
};
