import React from 'react';
import { connect } from 'react-redux';

import TodoList from './todoList';
import TodoInput from './todoInput';

const CRUD = ({ todos }) => 
	(<div className="pa2 ma2 tc">
		  <h4 className="f4 dark-blue">Currently on CRUD Route</h4>
		  <TodoInput />
		  <TodoList todos={todos} />
      </div>);

const mapStateToProps = state => ({
	todos: state.todos
});

export default connect(mapStateToProps)(CRUD);