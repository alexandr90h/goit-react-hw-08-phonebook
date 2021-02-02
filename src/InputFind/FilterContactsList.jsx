import ContactsListItem from '../ContactsList/ContactsItem';
// import styles from '../ContactsList/conractsList.module.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilterName } from '../redux/selectors';
import Table from 'react-bootstrap/Table';

// import { useState } from 'react';

export default function FilterContactsList() {
  let n = 1;
  const contactsItems = useSelector(state => state.contacts.items);
  // const filterItems = useSelector(state => state.contacts.filterItems);
  const filterName = useSelector(getFilterName);
  // const [filterItemsNew, setFilterItemsNew] = useState([]);
  const as = contactsItems.filter(({ name }) => {
    return name.toLowerCase().includes(filterName);
  });
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Number</th>
          <th width="100px">XXXXX</th>
        </tr>
      </thead>
      <tbody>
        {as.map(obj => {
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

FilterContactsList.propTypes = {
  stateData: PropTypes.array,
  changeFilter: PropTypes.string,
  onBtnDelId: PropTypes.func,
};
