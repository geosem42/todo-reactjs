import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  
  const [tasks, setTasks] = useState([
    { id: 1, title: "Refactor codebase", selected: false },
    { id: 2, title: 'Write unit tests', selected: false },
    { id: 3, title: "Fix bug in login flow", selected: false },
    { id: 4, title: "Write documentation", selected: false },
    { id: 5, title: "Implement new feature", selected: false },
    { id: 6, title: "Review pull requests", selected: false },
    { id: 7, title: "Optimize performance", selected: false },
    { id: 8, title: "Improve UI/UX design", selected: false },
    { id: 9, title: "Conduct code audit", selected: false },
    { id: 10, title: "Prepare deployment", selected: false },
  ]);

  const [highlightedId, setHighlightedId] = useState(null);
  const [deletedId, setDeletedId] = useState(null);

  return (
    <div className="max-w-screen-xl mx-auto mb-10 mt-10 px-4 md:px-8">
      <Header
        tasks={tasks}
        setTasks={setTasks}
        setHighlightedId={setHighlightedId}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        highlightedId={highlightedId}
        deletedId={deletedId}
        setDeletedId={setDeletedId}
      />
    </div>
  );
}

export default App;
