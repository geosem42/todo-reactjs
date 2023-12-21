import { useState, useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Refactor codebase' },
    { id: 2, title: 'Write unit tests' },
    { id: 3, title: "Fix bug in login flow" },
    { id: 4, title: "Write documentation" },
    { id: 5, title: "Implement new feature" },
    { id: 6, title: "Review pull requests" },
    { id: 7, title: "Optimize performance" },
    { id: 8, title: "Improve UI/UX design" },
    { id: 9, title: "Conduct code audit" },
    { id: 10, title: "Prepare deployment" },
  ]);
  return (
    <div className="mt-5 shadow-sm border rounded-lg overflow-x-auto" id="body">
      <table className="w-full table-auto text-sm text-left">
        <thead className="text-gray-600 font-medium border-b">
          <tr>
            <th className="py-3 px-6 flex items-center gap-x-4">
              <div>
                <input
                  type="checkbox"
                  id="checkbox-all-items"
                  className="checkbox-item peer hidden"
                />
                <label
                  htmlFor="checkbox-all-items"
                  className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                ></label>
              </div>
              Tasks
            </th>
            <th className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {tasks.map(task => (
            <tr key={task.id} className="odd:bg-gray-50 even:bg-white">
            <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-4">
              <div>
                <input
                  type="checkbox"
                  id={`checkbox-${task.id}`}
                  name={`checkbox-${task.id}`}
                  className="checkbox-item peer hidden"
                />

                <label
                    htmlFor={`checkbox-${task.id}`}
                  className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                ></label>
              </div>
                {task.title}
            </td>
            <td className="text-right px-6 whitespace-nowrap">
              <a
                href="#"
                className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
              >
                Edit
              </a>
              <button
                href="#"
                className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
              >
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
