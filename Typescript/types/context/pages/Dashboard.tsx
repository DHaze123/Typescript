import { useTasks } from "../context/TaskContext";

const Dashboard = () => {

  const { tasks, deleteTask } = useTasks();

  return (
    <div>
      <h1>Task Dashboard</h1>

      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>

          <button
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;