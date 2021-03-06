import React from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import TodoInput from './TodoInput';

const CRUD = ({ todos }) => 
	(<div className="pa2 ma2 tc">
		  <h4 className="f4 dark-blue">Currently on CRUD Route</h4>
		  <TodoInput />
		  <TodoList todos={todos} show={true} />
      </div>);

const mapStateToProps = state => ({
	todos: state.todos
});

export default connect(mapStateToProps)(CRUD);