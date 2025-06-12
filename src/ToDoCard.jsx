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
      className={`border-2 py-2 px-4 my-5 border-white block mx-auto w-[220px] md:w-[600px] rounded-xl shadow-lg text-teal-800 relative ${PRIORITY_CLASSES[priority]}`}
    >
      <h2 className="font-bold text-lg">{task}</h2>
      <>
      <span className="text-sm font-medium bg-teal-100 px-1 mx-1 rounded-sm">{priority}</span>
      <span className="text-sm font-medium bg-teal-100 px-1 mx-1 rounded-sm">{category}</span>
      </>
      <Trash2 color="#124d59" className="position absolute top-5 right-2 w-[20px] hover:w-[22px]" onClick={()=>{deleteTask(index)}}/>
    </div>
  );
};
