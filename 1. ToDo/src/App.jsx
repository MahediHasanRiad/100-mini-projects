import { useState } from "react"
import CreateItem from "./component/nav/create"
import Wrapper from "./component/Style/wrapper"
import Search from "./component/nav/search"
import Filter from "./component/nav/filter"
import Table from "./component/table/table"

function App() {

  const [allToDo, setAllToDo] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [filterInput, setFilterInput] = useState('all')

  /** all data collect  */
  const getData = data => {
    setAllToDo([].concat(...allToDo, data))
  }

  /** search */ 
  const searchHandle = (e) => {
    setSearchInput(e.target.value)
  }

  let filterData = allToDo.filter(data => {
    return (
      data.name?.toLowerCase().includes(searchInput.toLowerCase()),
      data.email?.toLowerCase().includes(searchInput.toLowerCase())
    )
  })
  /** search filter end */

  /** filter */
  const filterHandler = e => {
    setFilterInput(e.target.value)
  }

  if(filterInput === 'completed'){
    filterData = allToDo.filter(data => data.isSelect)
  }
  else if(filterInput === 'incompleted'){
    filterData = allToDo.filter(data => !data.isSelect)
  }

  /** filter end */

  return (
    <Wrapper>
      <section className="d-flex justify-content-around">
        <CreateItem getData={getData}/>
        <Search searchHandle={searchHandle} searchInput={searchInput}/>
        <Filter filterHandler={filterHandler} filterInput={filterInput}/>
      </section>
      <section>
        <Table allData={filterData} setAllToDo={setAllToDo}/>
      </section>
    </Wrapper>
  )
}

export default App
