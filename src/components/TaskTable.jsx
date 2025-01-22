import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const TaskTable = ({ tasks }) => (
    <div className="container mt-5" style={{width:"100%"}}>
        <table className="table table-bordered table-striped table-hover">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Completed</th>
                    <th scope="col">Source</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key={index}>
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        <td>{task.completed ? 'Yes' : 'No'}</td>
                        <td>{task.source}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default TaskTable;
