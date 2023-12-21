function Header() {
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
      <div className="mt-3 md:mt-0">
        <a
          href="#"
          className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-700 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
        >
          Add Task
        </a>
      </div>
    </div>
  );
}

export default Header;
