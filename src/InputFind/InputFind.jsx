import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { FiX } from "react-icons/fi";
import contactsAction from "../redux/action";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


export default function InputFind() {
    const dispatch = useDispatch();
    const resetInputFind = () => {
        dispatch(contactsAction.filterChange(''));
        document.querySelector("#btn-reset").style.color = "rgb(192, 192, 192)";
    }
    const hendlInputFilter = e => {
        dispatch(contactsAction.filterChange(e.currentTarget.value));
        e.currentTarget.value ? document.querySelector("#btn-reset").style.color = "red" : document.querySelector("#btn-reset").style.color = "rgb(192, 192, 192)";
    }
    return (
        <form>
                              <InputGroup className="mb-3">
    <FormControl
      placeholder="Find contacts by name"
      aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={hendlInputFilter}
    />
    <InputGroup.Append >
            <InputGroup.Text id="basic-addon2" >
              <button type="reset" onClick={resetInputFind} id="btn-reset">
                <FiX className="svg-btn-reset" /></button></InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
        </form>
                
        )
};
InputFind.propTypes = {
    onChangeFind:PropTypes.func,
}