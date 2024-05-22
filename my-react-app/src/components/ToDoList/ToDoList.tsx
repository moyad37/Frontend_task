import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import RainbowDatepicker from "./RainbowDatepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import TodoItem from "./TodoItem";
import clsx from "clsx";

interface Task {
  _id: string;
  text: string;
  completed: boolean;
  date: Date | null;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showTable, setShowTable] = useState(false);

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
    setShowModal(false);
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
    setShowModal(true);
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

  const handleNextDay = () => {
    if (date) {
      const nextDay = new Date(date);
      nextDay.setDate(date.getDate() + 1);
      setDate(nextDay);
    }
  };

  const handlePreviousDay = () => {
    if (date) {
      const previousDay = new Date(date);
      previousDay.setDate(date.getDate() - 1);
      setDate(previousDay);
    }
  };

  const getRelativeDateString = (selectedDate: Date | null) => {
    if (!selectedDate) return "";

    const today = new Date();
    const tomorrow = new Date(today);
    const yesterday = new Date(today);

    tomorrow.setDate(today.getDate() + 1);
    yesterday.setDate(today.getDate() - 1);

    today.setHours(0, 0, 0, 0);
    tomorrow.setHours(0, 0, 0, 0);
    yesterday.setHours(0, 0, 0, 0);

    const selected = new Date(selectedDate);
    selected.setHours(0, 0, 0, 0);

    if (selected.getTime() === today.getTime()) {
      return "Today";
    } else if (selected.getTime() === tomorrow.getTime()) {
      return "Tomorrow";
    } else if (selected.getTime() === yesterday.getTime()) {
      return "Yesterday";
    } else {
      return null;
    }
  };

  return (
    <div className="todo-list flex flex-col">
      <div className="flex justify-between my-2 items-center">
        <Button
          className="p-3 bg-cyan-400 w-fit"
          onClick={() => setDate(new Date())}
        >
          Today
        </Button>
        <div className="flex justify-center basis-full">
          <Button
            className="bg-transparent	border-hidden	text-cyan-400 hover:text-cyan-400 hover:scale-150"
            onClick={handlePreviousDay}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <RainbowDatepicker date={date} onChange={setDate} />
          <Button
            className="bg-transparent	border-hidden	text-cyan-400 hover:text-cyan-400 hover:scale-150"
            onClick={handleNextDay}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
        <Button
          className="p-3 bg-cyan-400 w-fit"
          onClick={() => setShowModal(true)}
        >
          <FontAwesomeIcon icon={faPlus} color="white" />
        </Button>
      </div>
      <hr />
      <h2 className="text-cyan-400 font-bold text-xl mt-4 mb-2">
        {getRelativeDateString(date)}
      </h2>
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
      <Modal show={showModal} onHide={() => setShowModal(false)}>
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
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalSave}>
            {editingTask ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </Modal>
      <Button
        className="p-3 w-fit bg-cyan-400"
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
