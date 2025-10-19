import { useState } from "react"
import Button from "../Style/button"
import Input from "../Style/input"
import shortid from "shortid"

const initialValue = {
  id: '',
  name: '',
  email: '',
  isSelect: false
}

function CreateItem({ getData }) {

    const [inputValue, setInputValue] = useState({...initialValue})

    const inputHandler = e => {
      setInputValue({
        ...inputValue,
        [e.target.name]: e.target.value
      })
    }

    const createToDo = (e) => {
      const updateData = {
        id: shortid.generate(),
        name: inputValue.name,
        email: inputValue.name + '@gmail.com',
        isSelect: false
      }
     if(e.key === 'Enter'){
        e.preventDefault()
        getData(updateData)
        setInputValue({...initialValue})
     }
    }


  return (
    <div>
      <Input name="name" onChange={inputHandler} value={inputValue.name} onKeyDown={createToDo}/>
      <Button onClick={createToDo}>ADD</Button>
    </div>
  )
}

export default CreateItem
