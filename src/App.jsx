import React from 'react'
import StudentList from './components/StudentList'
import { Route, Routes } from 'react-router'
import StudentForm from './components/StudentForm'
import StudentDetails from './components/StudentDetails'
import Login from './page/Login'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<StudentList/>}/>
        <Route path='/add' element={ <PrivateRoute> <StudentForm/> </PrivateRoute>}/>
        <Route path='/student/:id' element={<StudentDetails/>}/>
        <Route path=''/>
      </Routes>
      </div>
    </div>
  )
}

export default App