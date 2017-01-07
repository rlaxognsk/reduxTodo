import React, { PropTypes } from 'react';

const Todo = ( { text, completed, onDeleteClick, onDoneClick, onCancelClick } ) => {
    return (
        <li>
        <span
            style={ { textDecoration: completed ? 'line-through' : 'none' } }
        >{ text }</span>
        { completed ? <button onClick={ onCancelClick }>완료취소</button> :
                      <button onClick={ onDoneClick }>완료</button> }
        <button onClick={ onDeleteClick }>삭제</button></li>
    );
};

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onDoneClick: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired
};

export default Todo;