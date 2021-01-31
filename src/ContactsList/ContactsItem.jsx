import styles from './contactsItem.module.scss';
import PropTypes from 'prop-types';
import { VscTrash, VscEdit } from 'react-icons/vsc';
import * as operation from '../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import contactsAction from '../redux/action';
import { getContactsItem } from '../redux/selectors';

export default function ContactsListItem(props) {
  const dispatch = useDispatch();
  const stateContactsTtem = useSelector(getContactsItem);
  // const ModalVisible = useSelector(state => state.state)
  return (
    <tr key={props.id}>
      <td lg="2">{props.n}</td>
      <td>{props.name}</td>
      <td>{props.number}</td>
      <td className={styles.buttonConteiner}>
        <button
          onClick={async () => {
            const [item] = stateContactsTtem.filter(
              ({ id }) => id === props.id,
            );
            // console.log(item);
            await dispatch(contactsAction.getContactsById(item));
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
