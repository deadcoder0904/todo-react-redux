import CONSTANTS from './types';

const createTodoAction = name => ({type: CONSTANTS.CREATE_TODO, name});

const toggleUpdateAction = (update, value) => ({type: CONSTANTS.TOGGLE_UPDATE, update, value});

const removeTodoAction = id => ({
	type: CONSTANTS.DELETE_TODO,
	id
});

const toggleTodoAction = id => ({
	type: CONSTANTS.TOGGLE_TODO,
	id
});

export {
	createTodoAction,
	toggleUpdateAction,
	removeTodoAction,
	toggleTodoAction
};