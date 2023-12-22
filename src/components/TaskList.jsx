import CheckboxAll from "./partials/CheckboxAll";
import CheckboxItem from "./partials/CheckboxItem";
import SingularDeleteButton from "./partials/SingularDeleteButton";
import { PencilSquareIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

function TaskList({ tasks, setTasks, highlightedId, deletedId, setDeletedId, setSelectedCount }) {

  const handleSelect = (id) => {
    const newTasks = tasks.map(task => task.id === id ? { ...task, selected: !task.selected } : task);
    setTasks(newTasks);

    const selectedTask = newTasks.find(task => task.id === id);
    console.log(`Task ${selectedTask.id}: ${selectedTask.title} selected status is now ${selectedTask.selected}`);

    const newSelectedCount = newTasks.filter(task => task.selected).length;
    setSelectedCount(newSelectedCount);
  };

  return (
    <div className="mt-5 shadow-sm border rounded-lg overflow-x-auto" id="body">
      {tasks.length === 0 ? (
        <div className="text-center py-5">
          <h2 className="text-lg text-gray-400">No tasks available</h2>
        </div>
      ) : (
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6 flex items-center gap-x-4">
                <CheckboxAll
                  tasks={tasks}
                  setTasks={setTasks}
                  setSelectedCount={setSelectedCount}
                />
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
                  <button className="py-2 px-3 font-medium text-green-600 hover:text-green-700 hover:bg-green-50 active:bg-green-100 duration-150 rounded-lg">
                    <CheckCircleIcon className="w-5 h-5" />
                  </button>

                    <SingularDeleteButton
                      id={task.id}
                      tasks={tasks}
                      setTasks={setTasks}
                      setDeletedId={setDeletedId}
                      setSelectedCount={setSelectedCount}
                    />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TaskList;
