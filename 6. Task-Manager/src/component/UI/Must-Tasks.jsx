import Card from "../Utils/card";

function MustTasks({ task, editItem, deleteItem, completeTask }) {
  // ✅ Remove all local functions - use props from parent

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

export default MustTasks;