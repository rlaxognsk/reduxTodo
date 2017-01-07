import {
    ADD_TODO, DONE_TODO, CANCEL_TODO,
    FILTER_TODO, DELETE_TODO,
    INIT_TODO, SUCCESS_INIT_TODO, FAIL_INIT_TODO,
    EXTRA_LOAD_TODO, SUCCESS_EXTRA_LOAD_TODO, FAIL_EXTRA_LOAD_TODO,
    SAVE_TODO, SUCCESS_SAVE_TODO, FAIL_SAVE_TODO
} from '../actions';

const todo = ( state = {}, action ) => {
    switch ( action.type ) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                tag: action.tag,
                addDate: action.addDate,
                completed: action.completed,
                completedDate: action.completedDate,
                saved: action.saved,
                color: action.color
            };
        
        case DONE_TODO:
        case CANCEL_TODO:
            if ( state.id === action.id ) {
                return Object.assign( {}, state, {
                    completed: action.completed,
                    completedDate: action.completedDate
                } );
            }
            else {
                return state;
            }
        
        default:
            return state;
    }
};

const todoList = ( state = [], action ) => {
    switch ( action.type ) {
        case ADD_TODO:
            return [
                ...state,
                todo( undefined, action )
            ];
        
        case DONE_TODO:
        case CANCEL_TODO:
            return state.map( t => todo( t, action ) );
        
        case DELETE_TODO:
            return state.filter( t => action.id !== t.id );

        default:
            return state;
    }
};

const lastID = ( state = 0, action ) => {
    switch ( action.type ) {
        case ADD_TODO:
            return state + 1;
        case SUCCESS_INIT_TODO:
        default:
            return state;
    }
};

const isFetching = ( state = false, action ) => {
    switch ( action.type ) {
        case INIT_TODO:
        case EXTRA_LOAD_TODO:
        case SAVE_TODO:
            return true;
        
        default:
            return state;
    }
};

const filterType = ( state = 'SHOW_ALL', action ) => {
    switch ( action.type ) {
        case FILTER_TODO:
            return action.filterType;
        
        default:
            return state;
    }
};

const defaultTodos = {
    lastID: 0,
    isFetching: false,
    filterType: 'SHOW_ALL',
    todoList: []
};

const todos = ( state = defaultTodos, action ) => {
    switch ( action.type ) {
        case ADD_TODO:
            return Object.assign( {}, state, {
                todoList: todoList( state.todoList, action ),
                lastID: lastID( state.lastID, action )
            } );
        case DONE_TODO:
        case CANCEL_TODO:
        case DELETE_TODO:
            return Object.assign( {}, state, {
                todoList: todoList( state.todoList, action )
            } );
        
        case FILTER_TODO:
            return Object.assign( {}, state, {
                filterType: filterType( state.filterType, action )
            } );
        
        case INIT_TODO:
            return Object.assign( {}, state, {
                lastID: lastID( state.lastID, action )
            } );
        
        case EXTRA_LOAD_TODO:
        case SAVE_TODO:
            return Object.assign( {}, state, {
                isFetching: isFetching( state.isFetching, action )
            } );

        default:
            return state;
    }
};

export default todos;