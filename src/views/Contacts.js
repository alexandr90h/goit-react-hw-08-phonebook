import InputMainForm from '../InputMainForm/InputMainForm';
import ContactsList from '../ContactsList/ContactsList.jsx';
import InputFind from '../InputFind/InputFind';
import FilterContactsList from '../InputFind/FilterContactsList.jsx';
import { useSelector } from 'react-redux';
import { getFilterName, getModalVisible } from '../redux/selectors';
import ModalEdit from '../ModalEdit/ModalEdit';

export default function Contacts() {
  const filterName = useSelector(getFilterName);
  const modalVisible = useSelector(getModalVisible);

  return (
    <>
      <h1 className="title-contacts-box">Phonebook</h1>
      <div>
        <InputMainForm />
      </div>
      <div>
        <h2>Contacts</h2>
        <InputFind />
        {filterName === '' ? <ContactsList /> : <FilterContactsList />}
      </div>
      {modalVisible && <ModalEdit />}
    </>
  );
}
