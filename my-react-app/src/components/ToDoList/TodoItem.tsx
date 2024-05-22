import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import Checkbox from "./Checkbox";

interface Task {
  _id: string;
  text: string;
  completed: boolean;
  date: Date | null;
}

interface TodoItemProps {
  task: Task;
  deleteTask: (id: string) => void;
  toggleCompleted: (id: string) => void;
  editTask: (task: Task) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  deleteTask,
  toggleCompleted,
  editTask,
}) => {
  const handleChange = () => {
    toggleCompleted(task._id);
  };

  return (
    <div
      className={clsx(
        "flex justify-between mb-2 border-2 rounded-lg  p-2 items-center duration-1000 task-item",
        !task.completed ? "hover:bg-slate-100" : "",
        task.completed ? "order-1 bg-gray-300 hover:bg-gray-300" : ""
      )}
    >
      <Checkbox checked={task.completed} onChange={handleChange} />
      <div className="w-3/4">
        <p
          className={clsx(
            "break-all text-xl",
            task.completed === true ? "line-through text-gray-500" : ""
          )}
        >
          {task.text}
        </p>
      </div>
      <p>{task.date ? new Date(task.date).toLocaleDateString() : ""}</p>
      <div>
        <button
          className="m-2 hover:text-cyan-400 hover:scale-125"
          onClick={() => editTask(task)}
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button
          className="m-2 hover:text-red-500 hover:scale-125"
          onClick={() => deleteTask(task._id)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
