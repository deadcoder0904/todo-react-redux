import CONSTANTS from '../actions/types';
import uuid from 'uuid';

const randomKey = () => uuid.v4();

const todos = [
	{ id: randomKey(), name: "YOYOYO", completed: false }
];

const initialState = {
	todos,
	value: '',
	update: false
};

const todoReducer = (state = initialState, action) => {
	switch(action.type) {
		case CONSTANTS.CREATE_TODO: {
			const id = randomKey();
			const name = action.name;
			const completed = false;
			const todo = { id, name, completed };
			
			const todos = [ ...state.todos, todo ];
			return { ...state, todos };
		}
		case CONSTANTS.TOGGLE_UPDATE: {
			const update = action.update;
			const value = action.value;
			return { ...state, update, value };
		}
		case CONSTANTS.DELETE_TODO: {
			const todos = state.todos.filter(todo => todo.id !== action.id)
			return { ...state, todos };
		}
		case CONSTANTS.SEARCH_TODO: {
			const filteredTodos = state.todos.filter(todo => todo.name.toLowerCase().trim().includes(action.name.toLowerCase().trim()))
			return { ...state, filteredTodos };
		}
		case CONSTANTS.TOGGLE_TODO: {
			const todos = state.todos.map(todo => {
				if(todo.id == action.id)
					todo.completed = !todo.completed
				return todo
			})
			return { ...state, todos };
		}
		default:
			return state;
	}
};

export default todoReducer;
