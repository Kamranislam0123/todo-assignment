"use client";

import { addTask, editTask } from "@/store/tasksSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function TaskForm({ task, isEditing, setIsEditing }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(editTask({ id: task.id, title, description }));
      setIsEditing(false);
    } else {
      dispatch(addTask({ id: Date.now(), title, description }));
    }
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mb-2 w-full"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 mb-2 w-full"
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2">
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </form>
    </>
  );
}
