import { CheckCircleIcon } from "@heroicons/react/24/outline";

function CompleteButton({ id, tasks, setTasks, setSelectedCount }) {
  const handleComplete = () => {
    const newTasks = tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed, selected: task.completed ? task.selected : false }
        : task
    );
    setTasks(newTasks);

    const newSelectedCount = newTasks.filter(task => task.selected).length;
    setSelectedCount(newSelectedCount);
  }

  return (
    <button onClick={handleComplete} className="py-2 px-3 font-medium text-green-600 hover:text-green-700 hover:bg-green-50 active:bg-green-100 duration-150 rounded-lg">
      <CheckCircleIcon className="w-5 h-5" />
    </button>
  );
}

export default CompleteButton;
