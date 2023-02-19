import React from 'react'
import Homepage from './Homepage/homepage'
import Header from './Components/Header/header'
import Login from './Login/login'
import Classroompage from './Components/ClassroomPage/classroompage'


function App() {
  return (
    <div>
      <Header/>
      <Login />
      <Homepage/>
      <Classroompage/>
      </div>
  )
}

export default App