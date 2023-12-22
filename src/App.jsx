import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  
  const [tasks, setTasks] = useState([
    { id: 1, title: "Refactor codebase", selected: false, completed: false },
    { id: 2, title: 'Write unit tests', selected: false, completed: false },
    { id: 3, title: "Fix bug in login flow", selected: false, completed: false },
    { id: 4, title: "Write documentation", selected: false, completed: false },
    { id: 5, title: "Implement new feature", selected: false, completed: false },
    { id: 6, title: "Review pull requests", selected: false, completed: false },
    { id: 7, title: "Optimize performance", selected: false, completed: false },
    { id: 8, title: "Improve UI/UX design", selected: false, completed: false },
    { id: 9, title: "Conduct code audit", selected: false, completed: false },
    { id: 10, title: "Prepare deployment", selected: false, completed: false },
  ]);

  const [highlightedId, setHighlightedId] = useState(null);
  const [deletedId, setDeletedId] = useState(null);
  const [selectedCount, setSelectedCount] = useState(0);

  return (
    <div className="max-w-screen-xl mx-auto mb-10 mt-10 px-4 md:px-8">
      <Header
        tasks={tasks}
        setTasks={setTasks}
        setHighlightedId={setHighlightedId}
        selectedCount={selectedCount}
        setDeletedId={setDeletedId}
        setSelectedCount={setSelectedCount}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        highlightedId={highlightedId}
        deletedId={deletedId}
        setDeletedId={setDeletedId}
        setSelectedCount={setSelectedCount}
      />
    </div>
  );
}

export default App;
