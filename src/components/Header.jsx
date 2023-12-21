import { useState } from 'react';
import AddTaskModal from "./partials/AddTaskModal";

function Header({ tasks, setTasks, setHighlightedId }) {
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
      <div className="mt-3 md:mt-0">
        <AddTaskModal tasks={tasks} setTasks={setTasks} setHighlightedId={setHighlightedId} />
      </div>
    </div>
  );
}

export default Header;
