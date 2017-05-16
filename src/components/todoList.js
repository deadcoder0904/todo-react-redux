import React from 'react';
import uuid from 'uuid';
import TodoItem from './todoItem';

const randomKey = () => uuid.v4();

const renderTodoItems = todos => {
	if(!todos.length)
		return (
				<h1 className="f2 gray">No Todos Exist Yet !!</h1>
			);
	const items = todos.map(todo => <TodoItem name={todo.name} completed={todo.completed} key={randomKey().slice(-5)} id={todo.id} />);
	return (
		<ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
			{items}
		</ul>
	);
}

const todoList = ({ todos }) => {
	return (
			<div>
				{renderTodoItems(todos)}
			</div>
	);
};

export default todoList;