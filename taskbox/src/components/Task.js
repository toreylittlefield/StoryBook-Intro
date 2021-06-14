import React from 'react';

const Task = ({ task: {id, title, state}, onArchiveTask, onTaskPin }) => {
    return (
        <div className="list-item">
            <input type="text" value={title} readOnly />
        </div>
    );
};

export default Task;
