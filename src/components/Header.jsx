import { useState } from 'react';
import AddTaskModal from "./partials/AddTaskModal";
import { TrashIcon } from "@heroicons/react/24/outline";

function Header({ tasks, setTasks, setHighlightedId, setDeletedId, selectedCount, setSelectedCount }) {
  return (
    <div className="items-start justify-between md:flex">
      <div className="max-w-lg" id="header">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          Todo List
        </h3>
        <p className="text-gray-600 mt-2">
          Simple Todo list app built with React.js and Tailwind CSS.
        </p>
      </div>
      <div className="mt-3 md:mt-0 flex justify-between items-center">
        {selectedCount > 0 && (
          <div className='me-2'>
            <button
              onClick={() => {
                const selectedTasks = tasks.filter(task => task.selected);
                let tasksCopy = [...tasks];
                selectedTasks.forEach((task, index) => {
                  setTimeout(() => {
                    setDeletedId(task.id);
                    setTimeout(() => {
                      tasksCopy = tasksCopy.filter(t => t.id !== task.id);
                      setTasks(tasksCopy);
                      console.log(`Task ${task.id} deleted`);
                      setDeletedId(null);
                    }, 400);
                  }, index * 500);
                });
                setSelectedCount(0);
              }}
              className="flex justify-between items-center  ml-2 px-4 py-2 text-white duration-150 font-medium bg-red-700 rounded-lg hover:bg-red-800 active:bg-red-700 md:text-sm"
            >
              <span className="mr-2">{selectedCount} selected</span>
              <TrashIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        )}

        <AddTaskModal
          tasks={tasks}
          setTasks={setTasks}
          setHighlightedId={setHighlightedId}
          setDeletedId={setDeletedId}
        />
      </div>
    </div>
  );
}

export default Header;
