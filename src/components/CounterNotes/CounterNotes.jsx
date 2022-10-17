import { useSelector } from 'react-redux';
import styles from './CounterNotes.module.scss';

function CounterNotes() {

    const counter = useSelector(state => state.totalNotes);

    return(
        <div>
            <p>{counter} notes added</p>
        </div>
    );
}

export default CounterNotes;
