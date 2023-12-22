function CheckboxItem({ task, onCheck }) {
  return (
    <div>
      <input
        type="checkbox"
        id={`checkbox-${task.id}`}
        name={`checkbox-${task.id}`}
        className="checkbox-item peer hidden"
        checked={task.selected}
        onChange={onCheck}
        disabled={task.completed}
      />
      <label
        htmlFor={`checkbox-${task.id}`}
        className={`relative flex w-5 h-5 ${task.completed ? 'bg-green-200' : (task.selected ? 'bg-indigo-600' : 'bg-white')} peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45`}
      ></label>
    </div>
  );
}

export default CheckboxItem;