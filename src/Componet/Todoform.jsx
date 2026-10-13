import { useState } from "react";


export default function Todoform({onAddTask}) {
    const [tasks, setTasks] = useState("");
     const handelInputChange = (e) => {
    setTasks(e.value);
  };

  const addTask = (e) => {
     // Prevent the default form submission behavior 
     e.preventDefault();
    onAddTask(tasks);
    setTasks(""); // Clear the input field after adding the task
  }
  return (
    <section>
      <form onSubmit={addTask}>
        <div className="flex items-center gap-2 mx-[2rem] mt-[1rem]">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            value={tasks}
            onChange={(e) => handelInputChange(e.target)}
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
}