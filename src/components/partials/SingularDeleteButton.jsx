import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { TrashIcon } from "@heroicons/react/24/outline";

function SingularDeleteButton({ id, tasks, setTasks, setDeletedId }) {
  const MySwal = withReactContent(Swal);

  const handleDelete = () => {
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
    <button onClick={handleDelete} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-700 duration-150 hover:bg-indigo-50 rounded-lg">
      <TrashIcon className="w-5 h-5" />
    </button>
  );
}

export default SingularDeleteButton;
