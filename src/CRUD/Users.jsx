import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Style from './home.module.css'
import Editusers from './Editusers'
import { Link } from 'react-router-dom'


const Users = () => {
  let[state, setState] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/user")
    .then((response)=>{
      console.log(response);
      console.log(response.data);
      setState(response.data)
    })
  }, [])

  let deletedata=(index)=>{
    axios.delete(`http://localhost:5000/user/${index}`)
    window.location.assign('/user')
  }

  return (
    <div id={Style.user}>
      {state.map((x)=>{
        return(
          <div id={Style.profile}>
            Name : {x.name}<br/>
            Salary :{x.Salary}<br/>
            Company :{x.company}<br/><br/><br/>
            <div className={Style.btn}>
            <Link to={`/edit/${x.id}`}>Edit</Link>
            <button onClick={()=>{deletedata(x.id)}}>Delete</button>
            </div>
          </div>
        )
      })}
       
    </div>
  )
}

export default Users