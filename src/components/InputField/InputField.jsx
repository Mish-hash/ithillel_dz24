import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import React from 'react';
import { addNote } from '../../storage/notesSLice';
import { totalNoteIncrement } from '../../storage/totalNoteSlice';
import styles from './InputField.module.scss';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.addNote = this.addNote.bind(this);
        this.togleText = this.togleText.bind(this);
        this.state = {text: ''}
    }

    togleText(e) {
        this.setState({text: e.target.value});
    }

    addNote() {
        const addNote = this.props.actionAddNote;
        this.props.actionTotalNoteIncrement();
        addNote({text: this.state.text});
        this.setState({text: ''});
    }

    render() {
        return(
            <div className={styles.container}>
                <input type='text' value={this.state.text} onChange={this.togleText}/>
                <button onClick={this.addNote}>Add note</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    actionAddNote: bindActionCreators(addNote, dispatch),
    actionTotalNoteIncrement: bindActionCreators(totalNoteIncrement, dispatch)
}};

export default connect(null, mapDispatchToProps)(InputField);
