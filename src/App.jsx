import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("/api/tasks");
      setTasks(response.data);
    } catch (error) {
      alert("Error fetching tasks.", error);
    }
  };

  const addTask = async (task) => {
    try {
      await axios.post("/api/tasks", task);
      fetchTasks();
    } catch (error) {
      alert("Error adding task.", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    

    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{width:"100%"}}>
      <div className="card">
        <div className="card-body">
          <div className="text-center mb-4">
            <h1 className="display-4">Task Manager</h1>
          </div>
          <TaskForm onTaskSubmit={addTask} />
          <div className="mt-4">
            <TaskTable tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
