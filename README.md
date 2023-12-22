# Description

This is a simple Todo list application built with React.js and Tailwind CSS.

- **Task Creation**: The application allows users to create tasks using the `AddTaskModal` component. When the user clicks the “Add Task” button, a modal opens where they can enter the title of the new task. If the title field is left empty, an error message is displayed. When a new task is added, it is assigned a unique ID, its `selected` and `completed` properties are set to `false`, and it is added to the `tasks` array in the state.
- **Task Display**: All tasks are displayed in a table in the `TaskList` component. Each task has a checkbox, a title, a complete button, and a delete button. If a task is marked as completed, its title is strikethrough, and its checkbox and delete button are disabled.
- **Task Selection**: Each task can be selected or deselected by clicking its checkbox. The `selected` property of the task in the `tasks` array is toggled accordingly. There’s also a “select all” checkbox in the table header that allows the user to select or deselect all tasks at once. However, completed tasks cannot be selected.
- **Task Completion**: Each task can be marked as completed or uncompleted by clicking its complete button. The `completed` property of the task in the `tasks` array is toggled accordingly. When a task is marked as completed, its `selected` property is set to `false`, making it unselectable.
- **Task Deletion**: Each task can be deleted individually by clicking its delete button. However, completed tasks cannot be deleted. There’s also a “Mass Delete” button that allows the user to delete all selected tasks at once. When a task is deleted, it is removed from the `tasks` array in the state.
- **Selected Count**: The application keeps track of the number of selected tasks. This count is updated whenever a task is selected, deselected, completed, or deleted. The count is displayed on the “Mass Delete” button.
- **Highlighting and Deleting Animations**: When a new task is added, it is briefly highlighted. When a task is deleted, a deleting animation is played.

This application demonstrates a variety of functionalities including state management, conditional rendering, and interaction with user input.

# Installation

Install package
```
npm install
```
Run server
```
npm run dev
```