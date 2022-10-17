import React from 'react';
import { connect } from 'react-redux';
import styles from './NoteList.module.scss';

class NoteList extends React.Component {

    constructor(props) {
        super()
    }

    render() {
        return(
        <div >
            <ul className={styles.container}>
                {this.props.notes.map(el => <li key={`note_${el.id}`}>{el.text}</li>)}
            </ul>
        </div>
    );
    }

}

const mapStateToProps = (state) => ({
    notes: state.notes
});

export default connect(mapStateToProps, null)(NoteList);
