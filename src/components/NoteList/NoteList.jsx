import { useSelector } from 'react-redux';
import styles from './NoteList.module.scss';

function NoteList() {

    const notes = useSelector(state => state.notes);

    return(
        <div >
            <ul className={styles.container}>
                {notes.map(el => <li key={`note_${el.id}`}>{el.text}</li>)}
            </ul>
        </div>
    );
}

export default NoteList;
