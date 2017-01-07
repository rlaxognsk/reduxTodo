// Sync type
export const ADD_TODO = 'ADD_TODO';
export const DONE_TODO = 'DONE_TODO';
export const CANCEL_TODO = 'CANCEL_TODO';
export const FILTER_TODO = 'FILTER_TODO';
export const DELETE_TODO = 'DELETE_TODO';
// Request type
export const INIT_TODO = 'INIT_TODO';
export const EXTRA_LOAD_TODO = 'EXTRA_LOAD_TODO';
export const SAVE_TODO = 'SAVE_TODO';
// Request success type
export const SUCCESS_INIT_TODO = 'SUCCESS_INIT_TODO';
export const SUCCESS_EXTRA_LOAD_TODO = 'SUCCESS_EXTRA_LOAD_TODO';
export const SUCCESS_SAVE_TODO = 'SUCCESS_SAVE_TODO';
// Request fail type
export const FAIL_INIT_TODO = 'FAIL_INIT_TODO';
export const FAIL_EXTRA_LOAD_TODO = 'FAIL_EXTRA_LOAD_TODO';
export const FAIL_SAVE_TODO = 'FAIL_SAVE_TODO';

const _getDate = () => {
    let date = new Date();

    let year = date.getFullYear().toString().substring( 2, 4 );
    let month = date.getMonth() + 1;
    month = month.toString().length === 1 ? '0' + month : month;
    let day = date.getDate();
    day = day.toString().length === 1 ? '0' + day : day;

    let hours = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    return `${ year }-${ month }-${ day } ${ hours }:${ minute }:${ seconds }`;
};

export const addTodo = ( newID, text, color = '#000', tag = [] ) => {
    return {
        type: ADD_TODO,
        id: newID,
        text,
        tag,
        addDate: _getDate(),
        completed: false,
        completedDate: '',
        saved: false,
        color
    };
};

export const doneTodo = ( id ) => {
    return {
        type: DONE_TODO,
        id,
        completed: true,
        completedDate: _getDate()
    };
};

export const cancelTodo = ( id ) => {
    return {
        type: CANCEL_TODO,
        id,
        completed: false,
        completedDate: ''
    };
};

export const filterTodo = ( filterType ) => {
    return {
        type: FILTER_TODO,
        filterType
    };
};

export const deleteTodo = ( id ) => {
    return {
        type: DELETE_TODO,
        id
    };
};

export const initTodo = ( account ) => {
    return {
        type: INIT_TODO,
        account
    };
};

export const extraLoadTodo = ( lastTodoID ) => {
    return {
        type: EXTRA_LOAD_TODO,
        lastTodoID
    };
};