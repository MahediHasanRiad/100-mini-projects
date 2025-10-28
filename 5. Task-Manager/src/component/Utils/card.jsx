import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { CardView } from "../Style/cardView";
import AddTask from "../UI/Add-Task";
import { useEffect, useState } from "react";


function Card({ task, completeTask, deleteItem, editItem }) {

  const [editValue, setEditValue] = useState(task)

  useEffect(() => {
    setEditValue(task)
  }, [task])

  // edit send in parant
  const saveEdit = () => {
    editItem(task.id, editValue)
  }

  // input handler
  const editInputHandler = e => {
    setEditValue({
     ...editValue,
     [e.target.name]: e.target.value 
   });
  }
 
  return (
    <CardView
      isSelect={task.isSelect}
      className="d-flex justify-content-between border border-secondary-subtle rounded p-2 m-2"
    >
      {/* checkbox  */}
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <input
            type="checkbox"
            className="form-check-input me-3"
            id={task.id}
            onChange={() => completeTask(task.id)}
            checked={task.isSelect}
          />
        </div>
        {/* todo */}
        <div>
          <b>{task.taskName}</b> <br />
          <span>{task.taskDescription}</span>
        </div>
      </div>
      {/* edit & delete button  */}
      <div className="d-flex align-items-center ms-3">
        <span>
            <AddTask 
            text={<CiEdit />}
            value={editValue}
            addTask={saveEdit}
            inputHandler={editInputHandler}
            modalId= {`modal${task.id}`}
          />
        </span>
        <span
          className="m-2"
          style={{ cursor: "pointer" }}
          onClick={() => deleteItem(task.id)}
        >
          <MdDelete />
        </span>
      </div>
    </CardView>
  );
}

export default Card;
