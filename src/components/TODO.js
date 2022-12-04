import React, { useState, useRef, useEffect } from 'react';
import './TODO.css';

const Todo = ({ todos, removeTodo, updateTodo }) => {
  const todoUpdateInputRef = useRef(null);

  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  // whenever edit.id gets set to true, focus the textbox
  useEffect(() => {
    if (edit.id && todoUpdateInputRef.current) {
      todoUpdateInputRef.current.focus();
    }
  }, [edit.id, todoUpdateInputRef]);

  const submitUpdate = () => {
    updateTodo({ id: edit.id, text: edit.value });

    setEdit({
      id: null,
      value: '',
    });
  };

  const onTODOChange = (e) => {
    setEdit({ ...edit, value: e.target.value });
  };

  const onEdit = (data) => {
    setEdit({ id: data.id, value: data.text });
  };

  return todos.map((todo, index) => (
    <div className={'todo-row'} key={index}>
      {!edit.id || todo.id !== edit.id ? (
        <>
          <div
            key={todo.id}
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          >
            {todo.text}
          </div>

          <div className='icons'>
            <a onClick={() => removeTodo(todo.id)} className='delete-icon'>
              <i className='fa fa-trash'> </i>
            </a>
            <a
              onClick={() => {
                onEdit(todo);
              }}
              className='edit-icon'
            >
              <i className='fa fa-edit'> </i>
            </a>
          </div>
        </>
      ) : (
        <>
          <div>
            <input
              className={'todo-update-input'}
              type={'text'}
              value={edit.value}
              onChange={onTODOChange}
              ref={todoUpdateInputRef}
            />
          </div>
          <div className='icons'>
            <a onClick={submitUpdate} className='update-icon'>
              <i className='fa fa-arrow-circle-up'> </i> Update
            </a>
          </div>
        </>
      )}
    </div>
  ));
};

export default Todo;
