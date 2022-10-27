
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Style from './home.module.css'


const Editusers = () => {

  let [name, setName] = useState("")
  let [Salary, setSalary] = useState("")
  let [company, setCompany] = useState("")
  let navigate = useNavigate()
  let {index} = useParams()
  console.log({index});

  useEffect(()=>{
    axios.get(`http://localhost:5000/user/${index}`)
    .then((response)=>{
        console.log(response.data)
        setName(response.data.name)
        setSalary(response.data.Salary)
        setCompany(response.data.company)
    })
  },[])

  let formhandle=async (e)=>{
    let payload = {name, Salary, company}
    await axios.put(`http://localhost:5000/user/${index}`, payload)
    navigate('/user')
  }


  return (
    <section id={Style.form}>
    <form action="" onSubmit={formhandle} >
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

  )
}

export default Editusers