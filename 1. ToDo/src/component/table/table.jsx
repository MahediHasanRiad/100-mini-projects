import { useEffect, useState } from "react";

function Table({ allData, setAllToDo }) {

    const [DisplayData, setDisplayData] = useState(allData)

    useEffect(()=> {
        setDisplayData(allData)
    }, [allData])

  const editItem = (id) => {
    
  };
 /** delete item */
  const deleteItem = (id) => {
    const deleteOne = allData.filter((data) => data.id !== id);
    setAllToDo(deleteOne);
  };

  /** select item */
  const selectItem = id => {
    const updateData = allData.map(data => {
        if(data.id === id){
            return {...data, isSelect: !data.isSelect}
        }
        return data
    })
    setAllToDo(updateData)
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {DisplayData.map((data) => (
            <tr key={data.id}>
              <td>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={data.id}
                  checked={data.isSelect}
                  onChange={() => selectItem(data.id)}
                />
              </td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <button
                  className="btn btn-success m-2"
                  onClick={() => editItem(data.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => deleteItem(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
