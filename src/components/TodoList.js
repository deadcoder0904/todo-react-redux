import React from 'react';
import uuid from 'uuid';
import TodoItem from '../containers/TodoItem';

const randomKey = () => uuid.v4();

const renderTodoItems = (todos,show) => {
	if(!todos.length)
		return (
				<h1 className="f2 gray">No Todos Exist Yet !!</h1>
			);
	const items = todos.map(todo => <TodoItem name={todo.name.toUpperCase()} completed={todo.completed} key={randomKey().slice(-5)} id={todo.id} show={show} />);
	return (
		<ul className="list pl0 ml0 center w-50 ba b--light-silver br2">
			{items}
		</ul>
	);
}

const todoList = ({ todos, show }) => {
	return (
			<div>
				{renderTodoItems(todos, show)}
			</div>
	);
};

export default todoList;