import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import TodoList from '../components/TodoList';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      selected: [true,false,false]
    };
    this.displayAllTodos = this.displayAllTodos.bind(this);
    this.filteredTodos = this.filteredTodos.bind(this);
    this.completedTodos = this.completedTodos.bind(this);
  }

  componentWillMount() {
    const todos = this.props.todos;
    this.setState({ todos });
  }

  displayAllTodos() {
    const todos = this.props.todos;
    const selected = [true,false,false];
    this.setState({ todos, selected });
  }

  filteredTodos() {
    const todos = this.props.todos.filter(todo => !todo.completed);
    const selected = [false, true,false];
    this.setState({ todos, selected });
  }

  completedTodos() {
    const todos = this.props.todos.filter(todo => todo.completed);
    const selected = [false,false, true];
    this.setState({ todos, selected });
  }

  render() {
    return (
      <div className="pa2 ma2 tc">
		  <h4 className="f4 dark-green">Currently on Todos Route</h4>
          <div className="buttons">
            <button onClick={this.displayAllTodos} className={classnames("br3 pa3 ma3 bg-white", {"bg-yellow": this.state.selected[0]})}>All</button>
            <button onClick={this.filteredTodos} className={classnames("br3 pa3 ma3 bg-white", {"bg-yellow": this.state.selected[1]})}>Filtered</button>
            <button onClick={this.completedTodos} className={classnames("br3 pa3 ma3 bg-white", {"bg-yellow": this.state.selected[2]})}>Completed</button>
          </div>
		  <TodoList todos={this.state.todos} show={false} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
	todos: state.todos
});

export default connect(mapStateToProps)(Todos);