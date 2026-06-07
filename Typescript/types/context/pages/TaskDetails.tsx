import { useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

const TaskDetails = () => {

  const { id } = useParams();

  const { tasks } = useTasks();

  const task =
    tasks.find(t => t.id === id);

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <div>
      <h1>{task.title}</h1>

      <p>{task.description}</p>

      <p>
        Status:
        {task.completed
          ? " Complete"
          : " Pending"}
      </p>
    </div>
  );
};

export default TaskDetails;