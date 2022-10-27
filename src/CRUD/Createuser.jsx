import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Style from './home.module.css'


const Createuser = () => {

  let [name, setName] = useState("")
  let [Salary, setSalary] = useState("")
  let [company, setCompany] = useState("")
  let navigate = useNavigate()

  let formhandle=async (e)=>{
    e.preventDefault()
    console.log(name, Salary, company)
    let payload={name, Salary, company}
    await axios.post("http://localhost:5000/user", payload)
    navigate("/user")
  }


  return (
    <div>
        <section id={Style.form}>
        <form action="" onSubmit={formhandle}>
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
          <label htmlFor="">Salary</label>
          <input type="number" value={Salary} onChange={(e)=>{setSalary(e.target.value)}} /><br/>
          <label htmlFor="">Company</label>
          <input type="text" value={company} onChange={(e)=>{setCompany(e.target.value)}} /><br/>
          {/* <input type="Submit" value="Submit" /> */}
          <button>Submit</button>

        </form>
        </section>

    </div>
  )
}

export default Createuser