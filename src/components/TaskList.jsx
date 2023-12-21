import { useState, useEffect } from "react";
import CheckboxAll from "./partials/CheckboxAll";
import CheckboxItem from "./partials/CheckboxItem";

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Refactor codebase", checked: false },
    { id: 2, title: 'Write unit tests', checked: false },
    { id: 3, title: "Fix bug in login flow", checked: false },
    { id: 4, title: "Write documentation", checked: false },
    { id: 5, title: "Implement new feature", checked: false },
    { id: 6, title: "Review pull requests", checked: false },
    { id: 7, title: "Optimize performance", checked: false },
    { id: 8, title: "Improve UI/UX design", checked: false },
    { id: 9, title: "Conduct code audit", checked: false },
    { id: 10, title: "Prepare deployment", checked: false },
  ]);

  const handleCheck = (id) => {
    const newTasks = tasks.map(task => task.id === id ? { ...task, checked: !task.checked } : task);
    setTasks(newTasks);
    
    const checkedTask = newTasks.find(task => task.id === id);
    console.log(`Task ${checkedTask.id}: ${checkedTask.title} checked status is now ${checkedTask.checked}`);
  };

  return (
    <div className="mt-5 shadow-sm border rounded-lg overflow-x-auto" id="body">
      <table className="w-full table-auto text-sm text-left">
        <thead className="text-gray-600 font-medium border-b">
          <tr>
            <th className="py-3 px-6 flex items-center gap-x-4">
              <CheckboxAll tasks={tasks} setTasks={setTasks} />
              Tasks
            </th>
            <th className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {tasks.map(task => (
            <tr key={task.id} className="odd:bg-gray-50 even:bg-white">
            <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-4">
              <CheckboxItem task={task} onCheck={() => handleCheck(task.id)} />
              {task.title}
            </td>
            <td className="text-right px-6 whitespace-nowrap">
              <a href="#" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                Edit
              </a>
              <button href="#" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                Delete
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
