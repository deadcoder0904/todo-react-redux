import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTodoAction, toggleUpdateAction } from '../actions';

class TodoInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
		const value = nextProps.value;
		if(this.props.value !== value) {
			this.setState({ value });
			this.refs.todo.focus();
		}
		return true;
	}

	handleKeyPress(e)  {
		if(e.charCode === 13 && this.props.update) {
			this.props.createTodo(this.state.value);
			this.props.toggleUpdate(false, "");
			return;
		}

		if(e.charCode === 13 && this.state.value.trim() !== '') {
			this.props.createTodo(this.state.value);
			this.setState({ value: '' });
		}
	}

	handleChange(e) {
		const value = e.target.value.toUpperCase();
		this.setState({ value });
	}
	
  render() {
    return (
      <input className="w-50 pa2 ma2 tc f2 gray shadow-2 todo-input" ref="todo" 
      	placeholder="Enter Todo..." value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
    );
  }

}

const mapStateToProps = state => ({ value: state.value, update: state.update  });

const mapDispatchToProps = dispatch => ({ 
																																							createTodo: name => dispatch(createTodoAction(name)), 
																																							toggleUpdate: (update, value) => dispatch(toggleUpdateAction(update, value))
																																					});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);