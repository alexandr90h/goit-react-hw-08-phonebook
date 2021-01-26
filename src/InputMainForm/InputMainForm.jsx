import styles from './inputMainForm.module.scss';
import { useState } from 'react';
import { VscDeviceMobile } from "react-icons/vsc";
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from "react-redux";
import * as operation from "../redux/operation";
import { getContactsItem } from "../redux/selectors";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function InputMainForm() {

    //     const schema = yup.object().shape({
    //     name: yup.string().required(),
    //     number:yup.number().required(),
    // })

    const stateData = useSelector(getContactsItem);
    // const { register, handleSubmit, errors} = useForm({resolver:yupResolver(schema)});
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();

    const hendleInputChanga = e => {
        switch (e.target.name) {
            case 'name': setName(e.target.value)
                break;
            case 'number': setNumber(e.target.value)
                break;
            default:
                break;
        }
    }
    const hendleOnSubmite = () => {
        if (stateData.find(obj => obj.name.toLowerCase() === name.toLowerCase()) !== undefined) {
            alert(`${name} is alreadyin contacts.`);
            return;
        }
        dispatch(operation.addContacts( name, number ));
        reset();
    }
    const reset = () => {
        setName('');
        setNumber('');
    }
    return (
        <div>
            <form onSubmit={hendleOnSubmite} className={styles.mainForm}>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" srOnly>
                            Name
                                  </Form.Label>
                        <Form.Control
                            className="mb-2"
                             id="inlineFormInput"
                             placeholder="Name"
                            onChange={hendleInputChanga}
                            name="name"
                            value={name}
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" srOnly>
        Username
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
                                <InputGroup.Text><VscDeviceMobile className={ styles.MobileIcon}/></InputGroup.Text>
        </InputGroup.Prepend>
                            <FormControl id="inlineFormInputGroup" placeholder="Number" onChange={hendleInputChanga} name="number" value={ number}/>
      </InputGroup>
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2">
        Submit
      </Button>
    </Col>
  </Form.Row>
             </form>
         </div>
    );

};
