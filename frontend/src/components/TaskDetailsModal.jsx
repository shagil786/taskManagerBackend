import React from 'react';

const TaskDetailsModal = ({ isOpen, onClose, task }) => {
  if (!task) return null;

  return (
    <div
      className={`fixed inset-0 z-10 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="flex items-center justify-center min-h-screen h-screen">
        <div
          className="bg-white rounded shadow-2xl p-4 w-1/2 h-4/5"
          style={{ maxHeight: '90vh', boxShadow: '0px 0px 20px rgba(0,0,0,0.5)' }}
        >
          <h2 className="text-2xl font-bold mb-4">Task Details</h2>
          <div>
            <p className="mb-2"><strong>Title:</strong> {task.title}</p>
            <p className="mb-2"><strong>Description:</strong> {task.description}</p>
            <p className="mb-2"><strong>Status:</strong> {task.taskProgress.toUpperCase()}</p>
            <p className="mb-2"><strong>Created At:</strong> {new Date(task.createdAt).toLocaleString()}</p>
          </div>
          <div className="flex justify-end p-4">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsModal;
