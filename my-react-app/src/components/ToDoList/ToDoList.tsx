import { ChangeEvent, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DatePicker } from "react-rainbow-components";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPen,
  faXmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./css/Checkbox.css";
import clsx from "clsx";

interface Task {
  _id: string;
  text: string;
  completed: boolean;
  date: Date | null;
}

interface RainbowDatepickerProps {
  date: Date | null | string;
  onChange: (date: Date) => void;
}

const Checkbox = ({ checked, onChange }) => {
  return (
    <label className="custom-checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark">
        {checked && <FontAwesomeIcon icon={faCheck} />}
      </span>
    </label>
  );
};

const RainbowDatepicker: React.FC<RainbowDatepickerProps> = ({
  date,
  onChange,
}) => {
  return (
    <div>
      <DatePicker
        id="datePicker-1"
        value={date}
        onChange={(value: Date) => onChange(value)}
        formatStyle="large"
      />
    </div>
  );
};

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

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    axios
      .get<Task[]>("http://localhost:5080/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) =>
        console.error("There was an error fetching tasks:", error)
      );
  }, []);

  const handleModalSave = () => {
    if (editingTask) {
      updateTask();
    } else {
      addTask();
    }
    handleClose();
  };

  const addTask = () => {
    const newTask = {
      text,
      completed: false,
      date,
    };

    axios
      .post<Task>("http://localhost:5080/tasks", newTask)
      .then((response) => setTasks([...tasks, response.data]))
      .catch((error) =>
        console.error("There was an error adding the task:", error)
      );

    setText("");
    setDate(new Date());
  };

  const deleteTask = (id: string) => {
    axios
      .delete(`http://localhost:5080/tasks/${id}`)
      .then(() => setTasks(tasks.filter((task) => task._id !== id)))
      .catch((error) =>
        console.error("There was an error deleting the task:", error)
      );
  };

  const toggleCompleted = (id: string) => {
    const task = tasks.find((task) => task._id === id);
    if (!task) return;

    const updatedTask = { ...task, completed: !task.completed };

    axios
      .put<Task>(`http://localhost:5080/tasks/${id}`, updatedTask)
      .then((response) => {
        setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
      })
      .catch((error) =>
        console.error("There was an error updating the task:", error)
      );
  };

  const editTask = (task: Task) => {
    setEditingTask(task);
    setText(task.text);
    setDate(task.date ? new Date(task.date) : new Date());
    handleShow();
  };

  const updateTask = () => {
    if (!editingTask) return;

    const updatedTask = {
      ...editingTask,
      text,
      date,
    };

    axios
      .put<Task>(`http://localhost:5080/tasks/${editingTask._id}`, updatedTask)
      .then((response) => {
        setTasks(
          tasks.map((task) =>
            task._id === editingTask._id ? response.data : task
          )
        );
        setEditingTask(null);
        setText("");
        setDate(new Date());
      })
      .catch((error) =>
        console.error("There was an error updating the task:", error)
      );
  };

  const filteredTasks = tasks.filter((task) => {
    if (!task.date) return false;
    const taskDate = new Date(task.date).setHours(0, 0, 0, 0);
    const selectedDate = date
      ? date.setHours(0, 0, 0, 0)
      : new Date().setHours(0, 0, 0, 0);
    return taskDate === selectedDate;
  });

  return (
    <div className="todo-list flex flex-col">
      <div className="flex justify-between p-2 m-2 items-center">
        <RainbowDatepicker date={date} onChange={setDate} />
        <Button className="p-3 bg-cyan-400 w-fit" onClick={handleShow}>
          <FontAwesomeIcon icon={faPlus} color="white" />
        </Button>
      </div>
      <div className="tasksContainer flex flex-col">
        {filteredTasks.map((task) => (
          <TodoItem
            key={task._id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
            editTask={editTask}
          />
        ))}
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingTask ? "Edit Task" : "Add Task"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="bg-gray-300 rounded-xl p-2 w-full mb-2"
            placeholder="Task"
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
          />
          <RainbowDatepicker date={date} onChange={setDate} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalSave}>
            {editingTask ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </Modal>
      <Button
        className="p-2 w-fit bg-cyan-400"
        variant="primary"
        onClick={() => setShowTable(!showTable)}
      >
        all tasks
      </Button>
      <table
        className={clsx(
          "border-separate table-auto border border-slate-400",
          showTable ? "" : "hidden"
        )}
      >
        <thead>
          <tr>
            <th className="border border-slate-300">Task</th>
            <th className="border border-slate-300">Completed</th>
            <th className="border border-slate-300">Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item) => (
            <tr key={item._id}>
              <td className="border border-slate-300">{item.text}</td>
              <td className="border border-slate-300">
                {item.completed.toString()}
              </td>
              <td className="border border-slate-300">
                {item.date ? new Date(item.date).toLocaleString() : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
