import React, {useContext} from 'react';
import {formContext} from '../../context';
import {setFormHOF} from '../../lib';

const Phone = () => {
    const {formState, setFormState} = useContext(formContext);

    const handlerChange = (event) => {
        setFormState(setFormHOF('phone',event.target.value));
    }

    return (
        <div>
            <label htmlFor='phone'>Telephone </label>
            <input name='phone' id='phone' type="text" value={formState.phone} onChange={handlerChange} />
        </div>
    );
};

export default Phone;