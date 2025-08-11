import { useEffect, useState } from "react";
import addicon from "./assets/addicon.png";
import todolisticon from "./assets/todolisticon.png";
import { ToDoCard } from "./ToDoCard";
import toast, { Toaster } from "react-hot-toast";

export const App = () => {
  const [newtask, setNewTask] = useState({
    task: "",
    priority: "",
    category: "",
  });
  const [tasks, setTasks] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");

  useEffect(() => {
    if (tasks.length == 0) return;

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const getTasksfromLS = JSON.parse(localStorage.getItem("tasks") || "[]");

    setTasks(getTasksfromLS);
  }, []);

  const deleteTask = (index) => {
    const listAfterDeletion = tasks.filter((_, i) => i != index);

    setTasks(listAfterDeletion);
    toast.success("Task delete successfully");
  };

  return (
    <div className="min-h-screen bg-teal-100">
      <h1 className="flex justify-center text-teal-800 text-2xl font-bold mb-5 pt-5">
        ToDoApp
        <img src={todolisticon} alt="icon" className="h-[50px]" />{" "}
      </h1>
      <div className="flex flex-row justify-center px-2">
        <input
          type="text"
          placeholder="Add a New Task..."
          value={newtask.task}
          onChange={(e) => {
            setNewTask({
              ...newtask,
              task: e.target.value,
            });
          }}
          className="w-1/2 md:w-1/4 border-2 border-gray-400 my-2 px-1 md:px-5 py-1 rounded-lg shadow-md focus:outline-none"
        />
        <select
          className="w-1/4 md:w-1/6 border-2 border-gray-400 my-2 px-1 md:px-5 py-1 rounded-lg shadow-md ms-2 focus:outline-none"
          value={newtask.priority}
          onChange={(e) => {
            setNewTask({
              ...newtask,
              priority: e.target.value,
            });
          }}
        >
          <option value="">Select Priority</option>
          <option value="high">📈High</option>
          <option value="medium">📊Medium</option>
          <option value="low">📉Low</option>
        </select>
        <select
          className="w-1/4 md:w-1/6 border-2 border-gray-400 my-2 px-1 md:px-5 py-1 rounded-lg shadow-md ms-2 focus:outline-none"
          value={newtask.category}
          onChange={(e) => {
            setNewTask({
              ...newtask,
              category: e.target.value,
            });
          }}
        >
          <option value="">Select Category</option>
          <option value="learning">🎯Learning</option>
          <option value="work">💪🏻Work</option>
          <option value="food">🍜Food</option>
          <option value="expense">🛒Expense</option>
          <option value="health">🌱Health</option>
          <option value="travel">✈️Travel</option>
          <option value="code">👩🏻‍💻Code</option>
          <option value="college">🎓College</option>
          <option value="other">🎀Other</option>
        </select>
        <img
          src={addicon}
          alt="add-icon"
          className="h-[35px] mt-1 md:mt-0 md:h-[45px] ms-1 md:ms-2 cursor-pointer"
          onClick={() => {
            if (!newtask.task || !newtask.priority || !newtask.category) {
              toast.error("Please enter task and select priority");
              return;
            }
            setTasks([...tasks, newtask]);
            setNewTask({
              task: "",
              priority: "",
              category: "",
            });
            toast.success("Task added successfully");
            setSelectedTab("All");
          }}
        />
      </div>

      <div className="h-[480px] w-[300px] md:w-[750px] md:h-[450px] b-cyan-300 overflow-y-scroll block mx-auto mt-5 py-2 md:py-5 bg-emerald-300 shadow-2xl rounded-lg">
        <div className="flex justify-center mt-2 mb-5">
          {["All", "High", "Medium", "Low"].map((tab, i) => {
            return (
              <span
                className={`px-1 md:px-3 py-[2px] md:py-1 text-sm md:font-medium mx-1 md:mx-3 w-[70px] md:w-[85px] text-center rounded-lg shadow-lg cursor-pointer ${
                  tab == selectedTab ? "bg-teal-400 text-white" : "bg-teal-100"
                }`}
                key={i}
                onClick={() => {
                  setSelectedTab(tab);
                }}
              >
                {tab}
              </span>
            );
          })}
        </div>
        <div>
          {tasks
            .filter(
              (newtask) =>
                selectedTab === "All" ||
                newtask.priority.toLowerCase() == selectedTab.toLowerCase()
            )
            .map((taskitem, index) => {
              const { task, priority, category } = taskitem;

              /* if (
                selectedTab != "All" &&
                priority.toLowerCase() != selectedTab.toLowerCase()
              ) {
                return null;
              } */

              return (
                <ToDoCard
                  task={task}
                  priority={priority}
                  category={category}
                  key={index}
                  index={index}
                  deleteTask={deleteTask}
                />
              );
            })}
        </div>
      </div>
      <Toaster />
    </div>
  );
};
