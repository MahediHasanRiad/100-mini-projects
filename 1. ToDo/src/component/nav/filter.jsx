import React from 'react'
import Select from '../Style/select'

function Filter({ filterHandler, filterInput }) {
  return (
    <div>
      <Select id='filter' name='filter' onChange={filterHandler} value={filterInput}>
        <option value="all">ALL</option>
        <option value="completed">Completed</option>
        <option value="incompleted">InCompleted</option>
      </Select>
    </div>
  )
}

export default Filter