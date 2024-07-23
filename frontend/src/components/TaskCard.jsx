import React from 'react';
// import '../App.css'

const TaskCard = ({ task, onEdit, onDelete, onViewDetails }) => {

  return (
    <div className="bg-white shadow-md p-4 rounded flex flex-col justify-between h-full">
      <h3 className="text-lg font-bold truncate">{task.title}</h3>
      <p className='truncate'>{task.description}</p>
      <p className="text-sm text-gray-500 mt-10">Created at: {new Date(task.createdAt).toLocaleString()}</p>
      {/* <p className="text-sm text-gray-500">Updated at: {new Date(task.updatedAt).toLocaleString()}</p> */}
      {/* Being sorted based on created Date in asc */}
      <div className="mt-4 flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 space-x-1">
        <button onClick={() => onDelete(task)} className="bg-red-500 text-white p-2 rounded w-full sm:w-auto">Delete</button>
        <button onClick={() => onEdit(task)} className="bg-yellow-500 text-white p-2 rounded w-full sm:w-auto">Edit</button>
        <button onClick={() => onViewDetails(task)} className="bg-blue-500 text-white p-2 rounded w-full sm:w-auto">View Details</button>
      </div>
    </div>
  );
};

export default TaskCard;
