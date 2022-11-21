import React from 'react'
import { useNavigate ,useHistory } from 'react-router-dom'

const Home = () => {

  let history = useNavigate()
  // const history = useHistory();
  const goingBanglore = () => {
    history('/bangalore')
  }

  return (
    <div>
      welcome to the Home page my lords !!!!!
      <button onClick={goingBanglore}>Submit</button>
    </div>
  )
}

export default Home
