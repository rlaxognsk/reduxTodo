import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ( { dispatch, lastID } ) => {
    let input;

    return (
        <form
            onSubmit={ e => {
                e.preventDefault();
                let value = input.value.trim();
                if ( value ) {
                    dispatch( addTodo( lastID, value ) );
                    input.value = '';
                }
            } }
        >
            <input
                ref={ node => input = node }
            />
        </form>
    );
};

const mapStateToProps = ( state ) => {
    return {
        lastID: state.todos.lastID
    };
};

export default connect( mapStateToProps )( AddTodo );