import { useEffect, useState } from "react";
import addicon from "./assets/addicon.png";
import todolisticon from './assets/todolisticon.png';

export const App = () => {
  const [newtask, setNewTask] = useState({
    task: "",
    priority: ""
  })
  const [tasks, setTasks] = useState([
    {
      task: "task 1",
      priority: "High"
    },
    {
      task: "task 2",
      priority: "Low"
    },
    {
      task: "task 3",
      priority: "Medium"
    },
    {
      task: "task 3",
      priority: "Medium"
    },
    {
      task: "task 3",
      priority: "Medium"
    }
  ]);

  return (
    <div className="min-h-screen bg-teal-100">
      <h1 className="flex justify-center text-teal-800 text-4xl font-bold mb-5 pt-5">ToDoApp<img src={todolisticon} alt="icon" className="h-[50px]"/> </h1>
      <div className="flex flex-row justify-center px-2">
        <input
          type="text"
          placeholder="Add a New Task..."
          value={newtask.task}
          onChange={(e) => {setNewTask({
            ...newtask,
            task: e.target.value
          })}}
          className="w-1/2 md:w-1/3 border-2 border-gray-400 my-2 px-1 md:px-5 py-1 rounded-lg shadow-md focus:outline-none"
        />
        <select className="w-1/4 md:w-1/6 border-2 border-gray-400 my-2 px-1 md:px-5 py-1 rounded-lg shadow-md ms-2 focus:outline-none" value={newtask.priority} onChange={(e)=>{setNewTask({
          ...newtask,
          priority: e.target.value
        })}}>
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <img
          src={addicon}
          alt="add-icon"
          className="h-[40px] md:h-[45px] ms-1 md:ms-2"
          onClick={()=>{
            setTasks([...tasks, newtask]);
            setNewTask({
              task: "",
              priority: ""
            })
          }}
        />
       
      </div>
      <div className="h-[450px] md:h-[500px] b-cyan-300 overflow-scroll mx-5 md:mx-50 mt-5 py-2 md:py-5 bg-emerald-500 shadow-2xl rounded-lg">
          {
            tasks.map((taskitem, i)=>{
              const {task, priority} = taskitem;
              return(
                <div key={i} className="border-2 border-teal-600 py-2 px-7 my-5 block mx-auto w-[220px] md:w-1/2 rounded-xl shadow-lg text-teal-800 bg-teal-200" >
                  <h2>{task}</h2>
                  <p>{priority}</p>
                </div>
              )
            })
          }
        </div>
    </div>
  );
};
