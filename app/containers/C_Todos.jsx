import { connect } from 'react-redux';
import Todos from '../components/Todos.jsx';
import { deleteTodo, doneTodo, cancelTodo } from '../actions';

const mapStateToProps = ( state ) => {
    return {
        todoList: state.todos.todoList
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        onDeleteClick: ( id ) => dispatch( deleteTodo( id ) ),
        onDoneClick: ( id ) => dispatch( doneTodo( id ) ),
        onCancelClick: ( id ) => dispatch( cancelTodo( id ) )
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( Todos );
