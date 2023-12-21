import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  
  useEffect(() => {
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto mt-10 px-4 md:px-8">
      <Header />
      
      <TaskList />
    </div>
  );
}

export default App;
