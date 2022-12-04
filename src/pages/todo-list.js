import React, { useEffect, useState } from 'react';

import TODOList from '../components/TODOList';
import UserService from '../services/user.service';

const TODOListPage = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTODOs();
  }, []);

  const setTODOs = async () => {
    const result = await UserService.getTODOList();
    setData(result.data);
  };

  const addTODO = (todo) => {
    const user = JSON.parse(localStorage.getItem('user'));

    UserService.addTODO({
      userid: user.user.id,
      text: todo.text,
    });

    setTODOs();
  };

  const updateTODO = (todoId, todoText) => {
    const user = JSON.parse(localStorage.getItem('user'));

    UserService.updateTODO({
      id: todoId,
      text: todoText,
      userId: user.user.id,
    });

    setTODOs();
  };

  const removeTODO = (todoId) => {
    UserService.removeTODO({ id: todoId });

    setTODOs();
  };

  return (
    <div>
      <TODOList
        todos={data}
        addTODO={addTODO}
        updateTODO={updateTODO}
        removeTODO={removeTODO}
      ></TODOList>
    </div>
  );
};

export default TODOListPage;
