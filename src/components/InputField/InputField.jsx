import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../storage/notesSLice';
import { totalNoteIncrement } from '../../storage/totalNoteSlice';
import styles from './InputField.module.scss';

function InputField(props) {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const togleText = (e) => {
        setText(e.target.value);
    }

    const addNotes = () => {
        dispatch(addNote({text}));
        dispatch(totalNoteIncrement());
        setText('');
    }

    return(
        <div className={styles.container}>
            <input type='text' value={text} onChange={togleText}/>
            <button onClick={addNotes}>Add note</button>
        </div>
    );
}

export default InputField;
