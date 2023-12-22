import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { TrashIcon } from "@heroicons/react/24/outline";

function MassDeleteButton({ tasks, setTasks, setDeletedId, selectedCount, setSelectedCount }) {
  const MySwal = withReactContent(Swal);
  return (
    <div className='me-2'>
      <button
        onClick={() => {
          const selectedTasks = tasks.filter(task => task.selected);
          if (selectedTasks.length > 0) {
            MySwal.fire({
              title: 'Are you sure?',
              html: `Do you want to delete these <span style="font-weight:bold">${selectedTasks.length}</span> tasks?`,
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#4338ca',
              cancelButtonColor: '#e0e7ff',
              confirmButtonText: 'Yes, delete them!'
            }).then((result) => {
              if (result.isConfirmed) {
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
                  }, index * 600);
                });
                setSelectedCount(0);
              }
            })
          }
        }}
        className="flex justify-between items-center mr-2 px-4 py-2 text-white duration-150 font-medium bg-red-700 rounded-lg hover:bg-red-800 active:bg-red-700 md:text-sm"
      >
        <span className="mr-2">{selectedCount} selected</span>
        <TrashIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}

export default MassDeleteButton;
