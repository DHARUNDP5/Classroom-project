import React from 'react'
import { Route, Routes } from "react-router-dom";
import Homepage from './Homepage/homepage'
import Header from './Components/Header/header'
import Login from './Login/login'
import Classroompage from './Components/ClassroomPage/classroompage'


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} exact></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Classroompage" element={<Classroompage/>}></Route>
      </Routes>
      {/* <Login /> */}
      {/* <Homepage/>
      <Classroompage/> */}
      </div>
  )
}

export default App