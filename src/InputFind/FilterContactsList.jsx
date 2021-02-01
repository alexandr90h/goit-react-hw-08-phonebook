import ContactsListItem from '../ContactsList/ContactsItem';
// import styles from '../ContactsList/conractsList.module.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContactsItem, getFilterName } from '../redux/selectors';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { useState } from 'react';

export default function FilterContactsList() {
  let n = 1;
  const filterItems = useSelector(getContactsItem);
  const filterName = useSelector(getFilterName);
  const [filterItemsNew, setFilterItemsNew] = useState([]);
  useEffect(() => {
    setFilterItemsNew(
      filterItems.filter(({ name }) => name.toLowerCase().includes(filterName)),
    );
    // eslint-disable-next-line
  }, [filterName]);
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
        {filterItemsNew.map(obj => {
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
