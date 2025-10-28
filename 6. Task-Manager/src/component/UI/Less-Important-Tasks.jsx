import Card from "../Utils/card";

function LessImportantTasks({ task, editItem, deleteItem, completeTask }) {

  return (
    <section>
      {task.length === 0 ? (
        <p className="text-center text-muted mt-3">No tasks yet</p>
      ) : (
        task.map((task) => (
          <Card
            key={task.id}
            task={task}
            editItem={editItem}
            deleteItem={deleteItem}
            completeTask={completeTask}
          />
        ))
      )}
    </section>
  );
}

export default LessImportantTasks;