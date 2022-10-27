import React ,{useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Explore from './Components/Explore'
import Hire from './Components/Hire'
import Challenges from './Components/Challenges'
import HomeCrud from './CRUD/HomeCrud'
import Createuser from './CRUD/Createuser'
import Users from './CRUD/Users'
import Editusers from './CRUD/Editusers'
import LifeCycle from './Components/LifeCycle'


const App = () => {
  let[state, setState]= useState(true)
  return (
   
    <div>
      {/* <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/explorepath' element={<Explore/>}/>
          <Route path='/hirepath' element={<Hire/>}/>
          <Route path='/challengepath' element={<Challenges/>}/>

        </Routes>
        </BrowserRouter> */}
        {/* <BrowserRouter>
        <HomeCrud/>
        <Routes>
          <Route path='create' element={<Createuser/>}/>
          <Route path='user' element={<Users/>}/>
          <Route path='/edit/:index' element={<Editusers/>}/>
        </Routes>
        </BrowserRouter> */}
        <button onClick={()=>{setState(true)}}>Mount Component</button>
        <button onClick={()=>{setState(false)}}>UnMount Component</button>
        {state?<LifeCycle/>:null}
    </div>
  )
}

export default App