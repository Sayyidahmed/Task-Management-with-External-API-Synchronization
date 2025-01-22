import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const TaskForm = ({ onTaskSubmit }) => {
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onTaskSubmit({ title, completed });
        setTitle('');
        setCompleted(false);
    };

    return (
        <div className="container mt-5" style={{ width: "80%", margin: "0 auto" }}>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                    />
                    <label className="form-check-label">
                        Completed
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Add Task</button>
            </form>
        </div>
    );
};

export default TaskForm;
