import { useState } from "react";
import AddTask from "../UI/Add-Task";
import {
  MustSection,
  ImportantSection,
  LessImportantSection,
} from "../Style/section";

import MustTasks from "../UI/Must-Tasks";
import ImportantTasks from "../UI/important-tasks";
import LessImportantTasks from "../UI/Less-Important-Tasks";
import shortid from "shortid";

const initialValue = {
  taskName: "",
  taskDescription: "",
  priority: "",
  isSelect: false,
};

function TaskManager() {
  const [value, setValue] = useState({ ...initialValue });
  const [allTasks, setAllTasks] = useState([]); 

  // input handler
  const inputHandler = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  // add task button
  const addTask = () => {
    if (!value.taskName || !value.priority) return; // Validation

    const newTask = {
      id: shortid.generate(),
      ...value,
    };

    setAllTasks([...allTasks, newTask]); // Add to single array
    setValue({ ...initialValue }); // Reset form
  };

  // Edit task 
  const editItem = (id, editValue) => {
    const updatedTasks = allTasks.map((item) =>
      item.id === id ? { ...item, ...editValue } : item
    );
    setAllTasks(updatedTasks);
  };

  // Delete task
  const deleteItem = (id) => {
    const updatedTasks = allTasks.filter((item) => item.id !== id);
    setAllTasks(updatedTasks);
  };

  // Complete task
  const completeTask = (id) => {
    const updatedTasks = allTasks.map((item) =>
      item.id === id ? { ...item, isSelect: !item.isSelect } : item
    );
    setAllTasks(updatedTasks);
  };

  // Filter tasks by priority
  const mustTasks = allTasks.filter((task) => task.priority === "must");
  const importantTasks = allTasks.filter((task) => task.priority === "important");
  const lessImportantTasks = allTasks.filter((task) => task.priority === "lessImportant");

  return (
    <section className="container">
      <section className="d-flex justify-content-between m-4">
        <div>
          <h2 className="display-6">Task Manager</h2>
        </div>
        <div className="mt-2">
          <AddTask
            backgroundColor="btn btn-outline-primary"
            inputHandler={inputHandler}
            value={value}
            addTask={addTask}
          />
        </div>
      </section>

      {/* display Must list  */}
      <section className="d-flex justify-content-between m-4">
        <MustSection>
          <h4 className="text-center mb-4">Must</h4>
          <MustTasks 
            task={mustTasks} 
            editItem={editItem}
            deleteItem={deleteItem}
            completeTask={completeTask}
          />
        </MustSection>

        {/* display important list  */}
        <ImportantSection>
          <h4 className="text-center mb-4">Important</h4>
          <ImportantTasks 
            task={importantTasks} 
            editItem={editItem}
            deleteItem={deleteItem}
            completeTask={completeTask}
          />
        </ImportantSection>

        {/* display less-important list  */}
        <LessImportantSection>
          <h4 className="text-center mb-4">Less Important</h4>
          <LessImportantTasks 
            task={lessImportantTasks} 
            editItem={editItem}
            deleteItem={deleteItem}
            completeTask={completeTask}
          />
        </LessImportantSection>
      </section>
    </section>
  );
}

export default TaskManager;