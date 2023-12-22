import AddTaskModal from "./partials/AddTaskModal";
import MassDeleteButton from "./partials/MassDeleteButton";

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
          <MassDeleteButton
            tasks={tasks}
            setTasks={setTasks}
            setDeletedId={setDeletedId}
            selectedCount={selectedCount}
            setSelectedCount={setSelectedCount}
          />
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
