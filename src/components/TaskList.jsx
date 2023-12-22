import { useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CheckboxAll from "./partials/CheckboxAll";
import CheckboxItem from "./partials/CheckboxItem";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

function TaskList({ tasks, setTasks, highlightedId, deletedId, setDeletedId }) {
  const MySwal = withReactContent(Swal);

  const handleSelect = (id) => {
    const newTasks = tasks.map(task => task.id === id ? { ...task, selected: !task.selected } : task);
    setTasks(newTasks);

    const selectedTask = newTasks.find(task => task.id === id);
    console.log(`Task ${selectedTask.id}: ${selectedTask.title} selected status is now ${selectedTask.selected}`);
  };

  const handleDelete = (id) => {
    MySwal.fire({
      title: 'Are you sure?',
      html: <p>You won't be able to revert this!</p>,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4338ca',
      cancelButtonColor: '#e0e7ff',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        setDeletedId(id);
        setTimeout(() => {
          const newTasks = tasks.filter(task => task.id !== id);
          setTasks(newTasks);
          console.log(`Task ${id} deleted`);
          setDeletedId(null);
        }, 400);
      }
    });
  }

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
          {[...tasks].sort((a, b) => b.id - a.id).map(task => (
            <tr key={task.id} className={`odd:bg-gray-50 even:bg-white ${task.id === highlightedId ? 'highlight' : ''} ${task.id === deletedId ? 'deleted' : ''}`}>
              <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-4">
                <CheckboxItem task={task} onCheck={() => handleSelect(task.id)} />
                {task.title}
              </td>
              <td className="text-right px-6 whitespace-nowrap">
                <button className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-700 duration-150 hover:bg-indigo-50 rounded-lg">
                  <PencilSquareIcon className="w-5 h-5" />
                </button>
                <button onClick={() => handleDelete(task.id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-700 duration-150 hover:bg-indigo-50 rounded-lg">
                  <TrashIcon className="w-5 h-5" />
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
