"use client";

import TaskForm from "./TaskForm";
import { useState } from "react";
import { deleteTask } from "@/store/tasksSlice";
import { useDispatch, useSelector } from "react-redux";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleEdit = (task) => {
    setCurrentTask(task);
    setIsEditing(true);
  };

  return (
    <div>
      <TaskForm
        task={currentTask}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <ul className="list-none p-0">
        {tasks &&
          tasks.map((task) => (
            <li key={task.id} className="border p-2 mb-2">
              <h3 className="font-bold">{task.title}</h3>
              <div>{task.description}</div>
              <button
                onClick={() => handleEdit(task)}
                className="bg-yellow-500 text-white p-2 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="bg-red-500 text-white p-2"
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
