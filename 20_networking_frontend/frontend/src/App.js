import React, { useState, useEffect, useCallback } from 'react';

import './App.css';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(function () {
    // without reverse proxy http://127.0.0.1:56844/tasks
    fetch('/api/tasks', {
      headers: {
        'Authorization': 'Bearer abc'
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        setTasks(jsonData.tasks);
      });
  }, []);

  useEffect(
    function () {
      fetchTasks();
    },
    [fetchTasks]
  );

  function addTaskHandler(task) {
    // without reverse proxy http://127.0.0.1:56844/tasks, IP from service exposing
    fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer abc',
      },
      body: JSON.stringify(task),
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (resData) {
        console.log(resData);
      });
  }

  return (
    <div className='App'>
      <section>
        <NewTask onAddTask={addTaskHandler} />
      </section>
      <section>
        <button onClick={fetchTasks}>Fetch Tasks</button>
        <TaskList tasks={tasks} />
      </section>
    </div>
  );
}

export default App;
