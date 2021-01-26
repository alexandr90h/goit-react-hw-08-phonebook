import styles from './app.module.scss';
import InputMainForm from './InputMainForm/InputMainForm';
import ContactsList from './ContactsList/ContactsList.jsx';
import InputFind from './InputFind/InputFind';
import FilterContactsList from './InputFind/FilterContactsList.jsx';
import { useSelector } from 'react-redux';
import { getFilterName, getModalVisible } from "./redux/selectors";
import ModalEdit from './ModalEdit/ModalEdit';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const filterName = useSelector(getFilterName);
  const modalVisible = useSelector(getModalVisible);
  
    return (
      <div className={styles.mainContainer}>
        <h1>Phonebook</h1>
        <div>
          <InputMainForm />
        </div>
        <div>
          <h2>Contacts</h2>
                  <InputFind />
          {filterName === ''
            ?
            <ContactsList/>
            :
            <FilterContactsList/>
          }
        </div>
        {modalVisible && <ModalEdit/>}
    </div>
    )
};