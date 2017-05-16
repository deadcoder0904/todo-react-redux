import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { toggleTodoAction, toggleUpdateAction, removeTodoAction } from '../actions';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	componentDidMount() {
		    console.log(this);
	}

	handleUpdate() {
		this.props.toggleUpdate(true,this.props.name);
		this.props.deleteTodo(this.props.id);
	}

  render() {
  	const { name, completed } = this.props;
    return (
      <li className={classnames("ph3 pv3 bb b--light-silver f2 shadow-5 br5", {'bg-white': !completed, 'bg-light': completed})}>
      	<span className="tr pointer dim pa2">
      		<img width="25" height="25" src="../style/edit.png" onClick={this.handleUpdate} />
      	</span>
      	<label htmlFor={name} className={classnames("lh-copy hover-gray pointer user-select-none word-break w-50",{ 'green': !completed, 'red strike': completed })}
	      		onClick={() => this.props.toggleCompleted(this.props.id)}>
	      		{name}
      	</label>
      	<span className="tr pointer dim pa2">
      		<img width="25" height="25" src="../style/close.png" onClick={() => this.props.deleteTodo(this.props.id)} />
      	</span>
      </li>
    );
  }

}

const mapStateToProps = state => ({
	todos: state.todos,
	value: state.value
});

const mapDispatchToProps = dispatch => ({
	toggleCompleted: id => dispatch(toggleTodoAction(id)),
	deleteTodo: id => dispatch(removeTodoAction(id)),
	toggleUpdate: (update, value) => dispatch(toggleUpdateAction(update, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);