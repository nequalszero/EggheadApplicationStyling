import React from 'react';
import {TodoItem} from './TodoItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const TodoList = (props) => {
  return (
    <ReactCSSTransitionGroup
      component="ul"
      className="todo-list"
      transitionName="todo-transition"
      transitionEnterTimeout={70}
      transitionLeaveTimeout={70}>
      {props.todos.map(todo =>
        <TodoItem handleToggle={props.handleToggle}
          handleRemove={props.handleRemove}
          key={todo.id}
          {...todo}/>
      )}
    </ReactCSSTransitionGroup>
  );
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
}
