import React, { PropTypes } from 'react';
import Todo from './Todo.jsx';

const Todos = ( { todoList, onDeleteClick, onCancelClick, onDoneClick } ) => {

    return (
        <ul className="todos">
        {
            todoList.map( t => 
                <Todo
                    key={ t.id }
                    onDeleteClick={ () => onDeleteClick( t.id ) }
                    onCancelClick={ () => onCancelClick( t.id ) }
                    onDoneClick={ () => onDoneClick( t.id ) }
                    { ...t }
                />
            )
        }
        </ul>
    );
};

Todos.propTypes = {
    todoList: PropTypes.arrayOf( PropTypes.shape( {
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        tag: PropTypes.array.isRequired,
        addDate: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        completedDate: PropTypes.string.isRequired,
        saved: PropTypes.bool.isRequired
    } ).isRequired ).isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default Todos;