import React from 'react'
import Homepage from './Homepage/homepage'
import Header from './Components/Header/header'
import Login from './Login/login'


function App() {
  return (
    <div>
      <Header/>
      <Homepage/>
      <Login />
      {/* <Routes>
        <Route path="/" element={<HomePage />} exact></Route>
        </Routes> */}
    </div>
  )
}

export default App