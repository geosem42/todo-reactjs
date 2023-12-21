import { useState, useEffect } from "react";

function CheckboxAll({ tasks, setTasks }) {
  const isCheckedAll = tasks.every(task => task.checked);

  const handleCheckAll = () => {
    setTasks(tasks.map(task => ({ ...task, checked: !isCheckedAll })));
    
    if (isCheckedAll) {
      console.log(`All ${tasks.length} tasks unselected`);
    } else {
      console.log(`All ${tasks.length} tasks selected`);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id="checkbox-all-items"
        className="checkbox-item peer hidden"
        checked={isCheckedAll}
        onChange={handleCheckAll}
      />
      <label
        htmlFor="checkbox-all-items"
        className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
      ></label>
    </div>
  );
}

export default CheckboxAll;