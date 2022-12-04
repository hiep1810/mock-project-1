import React, { useState } from 'react';
import TodoForm from './TODOForm';
import Todo from './TODO';
import './TODOList.css';
const TODOList = ({ todos, addTODO, updateTODO, removeTODO }) => {
  console.log(todos);
  const onAddTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    addTODO(todo);
  };
  const onUpdateTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    updateTODO(todo);
  };
  const onRemoveTodo = (todoId) => {
    removeTODO(todoId);
  };

  return (
    <div className='todo-list'>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={onAddTodo} />
      <Todo todos={todos} removeTodo={onRemoveTodo} updateTodo={onUpdateTodo} />
    </div>
  );
};

export default TODOList;
