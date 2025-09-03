import React from 'react'
import { Route, Routes } from 'react-router'
import StudentList from './components/StudentList'
import StudentForm from './components/StudentForm'
import StudentDetails from './components/StudentDetails'
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
        <Route path="/student/:id" element={<StudentDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
