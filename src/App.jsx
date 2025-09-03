import React from 'react'
import { Route, Routes } from 'react-router'
import StudentList from './components/StudentList'
import StudentForm from './components/StudentForm'
import Login from './page/Login'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<StudentList/>}/>
        <Route path="/add" element={<PrivateRoute><StudentForm/></PrivateRoute>}/>
      </Routes>
    </div>
  )
}

export default App
