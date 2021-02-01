import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactsListItem from './ContactsItem';
// import styles from './conractsList.module.scss'
import * as operation from '../redux/operation';
import { getContactsItem, getModalVisible } from '../redux/selectors';
import Table from 'react-bootstrap/Table';

export default function ContactsList() {
  let n = 1;
  const stateData = useSelector(getContactsItem);
  const modalVisible = useSelector(getModalVisible);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operation.fetchContacts());
    // eslint-disable-next-line
  }, [dispatch, modalVisible]);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Number</th>
          <th width="100px">X</th>
        </tr>
      </thead>
      <tbody>
        {stateData.map(obj => {
          return (
            <ContactsListItem
              n={n++}
              key={obj.id}
              id={obj.id}
              name={obj.name}
              number={obj.number}
            />
          );
        })}
      </tbody>
    </Table>
  );
}
