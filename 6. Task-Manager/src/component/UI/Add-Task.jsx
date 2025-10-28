function AddTask({
  inputHandler,
  value,
  addTask,
  text = "ADD Task",
  backgroundColor = "btn",
  modalId = 'exampleModal'
}) {
  return (
    <section>
      <button
        type="button"
        className={backgroundColor}
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        data-bs-whatever="@mdo"
      >
        {text}
      </button>

      <div
        className="modal fade"
        id={modalId}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                New Task
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="task-name" className="col-form-label">
                    Task Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="task-name"
                    name="taskName"
                    onChange={inputHandler}
                    value={value.taskName}

                  />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">
                    Task Description:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="taskDescription"
                    onChange={inputHandler}
                    value={value.taskDescription}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label for="priority" className="col-form-label">
                    Priority:
                  </label>
                  <select
                    className="form-select"
                    name="priority"
                    id="priority"
                    onChange={inputHandler}
                    value={value.priority}
                  >
                    <option value="" selected>
                      Select Priority
                    </option>
                    <option value="must">Must</option>
                    <option value="important">Important</option>
                    <option value="lessImportant">Less important</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={addTask}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddTask;
