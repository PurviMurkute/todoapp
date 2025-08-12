import React, { useState } from "react";
import { Trash2 } from "lucide-react";

export const ToDoCard = ({ task, priority, category, deleteTask, index }) => {
  const [isTaskSelected, setIsTaskSelected] = useState(false);

  const toggleTaskSelection = () => {
    setIsTaskSelected(!isTaskSelected);
  }

  return (
    <div
      className={`py-2 px-4 my-2 border-none flex justify-between items-center mx-auto w-[260px] md:w-[600px] bg-white rounded-xl shadow-lg  relative`}
    >
      <div className="flex gap-2 justify-start items-center">
        <button
          className={`w-[15px] h-[15px] rounded-full cursor-pointer md:mr-3 ${
            isTaskSelected
              ? "bg-teal-700 border-none"
              : "bg-white border-2 border-gray-400"
          }`}
          onClick={toggleTaskSelection}
        ></button>
        <div>
          <h2 className="font-medium text-lg px-1 mx-1">{task}</h2>
          <>
            <span className="text-sm font-sm bg-blue-400 text-white px-1 mx-1 rounded-sm">
              {priority}
            </span>
            <span className="text-sm font-sm bg-pink-400 text-white px-1 mx-1 rounded-sm">
              {category}
            </span>
          </>
        </div>
      </div>
      {isTaskSelected ? (
        <div className="bg-teal-200 w-[50px] p-2 flex justify-center items-center absolute h-full top-0 right-0 rounded-r-xl">
        <Trash2
          color="red"
          className="w-[20px] hover:w-[22px] cursor-pointer"
          onClick={() => {
            deleteTask(index);
          }}
        />
        </div>
      ) : null}
    </div>
  );
};
