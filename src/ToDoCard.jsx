import React from "react";
import {  Trash2 } from 'lucide-react';

export const ToDoCard = ({task, priority, category, deleteTask, index}) => {
  const PRIORITY_CLASSES = {
    high: "bg-teal-500 border-3",
    medium: "bg-teal-400  border-2",
    low: "bg-teal-300 border-1"
  }

  return (
    <div
      className={`border-1 py-2 px-4 my-2 border-gray-200 block mx-auto w-[260px] md:w-[600px] bg-teal-700 rounded-xl shadow-lg text-teal-200 relative ${PRIORITY_CLASSES[priority]}`}
    >
      <h2 className="font-bold text-lg">{task}</h2>
      <>
      <span className="text-sm font-medium bg-blue-400 text-white px-1 mx-1 rounded-sm">{priority}</span>
      <span className="text-sm font-medium bg-pink-400 text-white px-1 mx-1 rounded-sm">{category}</span>
      </>
      <Trash2 color="#fff" className="position absolute top-5 right-2 w-[20px] hover:w-[22px] cursor-pointer" onClick={()=>{deleteTask(index)}}/>
    </div>
  );
};
