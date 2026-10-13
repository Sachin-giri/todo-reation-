import { useState, useEffect } from "react";

import Todoform from "./Componet/Todoform";
import Todolist from "./Componet/Todolist";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [setDate, setSetDate] = useState("");
  const [setTime, setSetTime] = useState("");

  const addTask = (tasks) => {
    // Prevent the default form submission behavior

    if (tasks.trim() !== "") {
      // Add the task to your task list (you can implement this logic)

      if (taskList.includes(tasks)) {
        alert("Task already exists!");

        return;
      }
      setTaskList((taskList) => [...taskList, tasks]);
      console.log("Task added:", tasks);
    }
  };

  const DeleteTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const date = currentDate.toLocaleDateString();
      const time = currentDate.toLocaleTimeString();
      setSetDate(date);
      setSetTime(time);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-10">
        {/* Outer container */}
        <div className="relative  justify-content items-center h-[550px] w-[500px] mx-[30rem] mt-[3rem] rounded-2xl border-2 border-gray-300 bg-white">
          <h1 className="text-center text-2xl font-bold mt-[1rem]">
            Todo List
          </h1>

          <h2 className="text-center text-lg font-semibold mt-[1rem]">
            {setDate}-{setTime}
          </h2>
          <Todoform onAddTask={addTask} />

          <section className="mt-4">
            <ul className="mx-[2rem]">
              {taskList.map((task, index) => (
               <Todolist key={index} data={task} onDeleteTask={DeleteTask} />
              ))}
            </ul>
            <button
              className="  px-1 py-1 mx-[13rem] my-[20rem] text-white cursor-pointer w-[4rem] h-[3rem] color-red-500 hover:text-white bg-red-400 rounded-lg hover:bg-red-600"
              onClick={() => {
                setTaskList([]); // Clear the task list
              }}
            >
              Delete
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
