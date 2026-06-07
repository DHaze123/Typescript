import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Task } from "../types/task";

const CreateTask = () => {

  const { addTask } = useTasks();

  const [title, setTitle] =
    useState<string>("");

  const [description, setDescription] =
    useState<string>("");

  const [error, setError] =
    useState<string>("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString()
    };

    addTask(newTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>

      {error && <p>{error}</p>}

      <input
        type="text"
        value={title}
        onChange={e =>
          setTitle(e.target.value)
        }
      />

      <textarea
        value={description}
        onChange={e =>
          setDescription(e.target.value)
        }
      />

      <button type="submit">
        Save
      </button>
    </form>
  );
};

export default CreateTask;