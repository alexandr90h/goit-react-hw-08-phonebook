import ContactsListItem from '../ContactsList/ContactsItem';
// import styles from '../ContactsList/conractsList.module.scss';
import PropTypes from 'prop-types';
import * as operation from "../redux/operation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getFilterName, getFilterItem } from "../redux/selectors";
import Table from 'react-bootstrap/Table';

export default function FilterContactsList() {
                let n = 1;
    const filterName = useSelector(getFilterName);
    const filterItems = useSelector(getFilterItem);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(operation.filterContacts(filterName));
        // eslint-disable-next-line
    },[filterItems])
    return (
        <Table striped bordered hover >
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Number</th>
      <th width="100px">X</th>
    </tr>
  </thead>
            <tbody>
                {filterItems.map(obj => {
                    return (
                        <ContactsListItem
                            n={n++}
                            key={obj.id}
                            id={obj.id}
                            name={obj.name}
                            number={obj.number} />
                    )
                })}
  </tbody>
</Table>
    )
}

FilterContactsList.propTypes = {
    stateData: PropTypes.array,
    changeFilter: PropTypes.string,
    onBtnDelId:PropTypes.func,
}