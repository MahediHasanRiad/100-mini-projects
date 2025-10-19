import React, { useEffect, useState } from 'react'
import Input from '../Style/input'

function Search({ searchHandle, searchInput }) {

  return (
    <div>
      <Input placeholder='Search...' onChange={searchHandle} value={searchInput}/>
    </div>
  )
}

export default Search
