import { useParams } from "react-router-dom";
import { useTasks } from "../TaskContext";

const EditTask = () => {

  const { id } = useParams();

  const { tasks, updateTask } =
    useTasks();

  const task = tasks.find(
    t => t.id === id
  );

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <div>
      <h1>Edit Task</h1>

      {/* form similar to CreateTask */}

    </div>
  );
};

export default EditTask;