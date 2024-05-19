# To-Do List Web Application

This is a simple to-do list web application built with Next.js, TailwindCSS, and Redux. The application allows users to create, edit, delete, and manage tasks with persistence using browser local storage.

## Features

- **Create Task**: Add new tasks with a title and description.
- **Edit Task**: Update existing tasks.
- **Delete Task**: Remove tasks from the list.
- **View Tasks**: Display a list of tasks with pagination.
- **Persistent Storage**: Tasks are saved in the browser's local storage.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static web applications.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **Redux**: A state management library for JavaScript applications.
- **LocalStorage**: Web storage API for persisting data in the browser.


### Components

- **TaskForm**: A form component for adding and editing tasks.
- **TaskList**: A component to display tasks with pagination and action buttons (edit, delete).

### Pages

- **_app.js**: The main application component that wraps the application with the Redux provider.
- **index.js**: The home page component that renders the TaskList component.

### Store

- **index.js**: The Redux store configuration.
- **tasksSlice.js**: The Redux slice that handles tasks actions and reducers.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   
Usage
Adding a Task
Enter the task title and description in the input fields.
Click the "Add Task" button to add the task to the list.
Editing a Task
Click the "Edit" button next to the task you want to edit.
Update the title and description in the form.
Click the "Update Task" button to save the changes.
Local Storage
Tasks are saved in the browser's local storage, ensuring they persist across page reloads and browser sessions.
