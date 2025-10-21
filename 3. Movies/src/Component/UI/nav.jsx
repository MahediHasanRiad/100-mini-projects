import { useState } from 'react'
import { NavBar } from '../Style/nav'
import Input from '../utils/input'
import Select from '../utils/select'
import PageList from '../utils/pageList'

function Nav({ value, inputHandler }) {

  return (
    <NavBar>
        <div>
            <img src="../../../src/logo/movi-logo.jpg" alt="LOGO"  style={{ width: '30%' }}/>
        </div>
        <div>
            <PageList />
        </div>
        
        <div style={{ display: 'flex', marginTop: '2rem'}}>
            <Input id={'search'} name={'search'} value={value.search} inputHandler={inputHandler} />
            <Select id={'year'} name={'year'} value={value.year} inputHandler={inputHandler} />
        </div>
    </NavBar>
  )
}

export default Nav
