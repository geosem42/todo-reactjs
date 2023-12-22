import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { TrashIcon } from "@heroicons/react/24/outline";

function SingularDeleteButton({ id, tasks, setTasks, setSelectedCount, setDeletedId }) {
  const MySwal = withReactContent(Swal);

  const handleDelete = () => {
    const task = tasks.find(task => task.id === id);
    MySwal.fire({
      title: 'Are you sure?',
      html: <p>Do you want to delete <span className="font-bold text-gray-700">{task.title}</span>?</p>,
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
          const newSelectedCount = newTasks.filter(task => task.selected).length;
          setSelectedCount(newSelectedCount);
        }, 400);
      }
    });
  }

  return (
    <button onClick={handleDelete} 
            disabled={tasks.some(task => task.id === id && task.completed)} 
            className={`py-2 leading-none px-3 font-medium ${
              tasks.some((task) => task.id === id && task.completed)
                ? "text-gray-400"
                : "text-red-600 hover:text-red-700 duration-150 hover:bg-red-50"
            } rounded-lg`}
    >
      <TrashIcon className="w-5 h-5" />
    </button>
  );
}

export default SingularDeleteButton;
