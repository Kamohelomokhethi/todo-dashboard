import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("https://todo-server-4bvr.onrender.com/api/todos");
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);

  const completedTasks = todos.filter(t => t.status === 'complete');
  const pendingTasks = todos.filter(t => t.status === 'pending');

  return (
    <div className='container'>
      <h2>Dashboard</h2>
      <div className='card'>
        <div className='card-info'>
          <h3>Completed tasks</h3>
          {completedTasks.length > 0 ? (
            completedTasks.map(t => <p key={t.id}>{t.title}</p>)
          ) : (
            <p>No completed tasks</p>
          )}
        </div>

        <div className='card-info'>
          <h3>Pending tasks</h3>
          {pendingTasks.length > 0 ? (
            pendingTasks.map(t => <p key={t.id}>{t.title}</p>)
          ) : (
            <p>No pending tasks</p>
          )}
        </div>

        <div className='card-info'>
          <h3>All tasks</h3>
          {todos.map(t => <p key={t.id}>{t.title}</p>)}
        </div>
      </div>
    </div>
  );
}

export default App;
