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
          className="bg-white rounded-2xl shadow-2xl p-4 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 max-w-md mx-auto flex flex-col "
          style={{ maxHeight: '90vh', boxShadow: '0px 0px 20px rgba(0,0,0,0.5)' }}
        >
          <h2 className="text-2xl font-bold mb-4">Task Details</h2>
          <div className="flex-grow overflow-auto">
            <p className="mb-2"><strong>Title:</strong> {task.title}</p>
            <p className="mb-2"><strong>Description:</strong> {task.description}</p>
            <p className="mb-2"><strong>Status:</strong> {task.taskProgress.toUpperCase()}</p>
            <p className="mb-2"><strong>Created At:</strong> {new Date(task.createdAt).toLocaleString()}</p>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
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
