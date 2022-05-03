import Header from "./components/Header";
import "./App.css";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn React",
      day: "Friday at 8.30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Learn Nextjs",
      day: "Friday at 9.30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Learn Web3.js",
      day: "Saturday at 10.30pm",
      reminder: false,
    },
    {
      id: 4,
      text: "Learn Tailwind css",
      day: "sunday at 8.30pm",
      reminder: false,
    },
  ]);

  // Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show"
      )}
      <Footer />
      <SocialMedia />
    </div>
  );
}

export default App;
