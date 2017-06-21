import React from 'react';

export const TodoForm = (props) => (
  <form onSubmit={props.handleSubmit} className="add-todo">
    <input type="text" className="add-todo__input"
      value={props.currentTodo}
      onChange={props.handleInputChange}
      placeholder="new todo"/>
    <button type="submit" className="add-todo__button"></button>
  </form>
)

TodoForm.propTypes = {
  currentTodo: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
}
