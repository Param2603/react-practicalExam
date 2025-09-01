import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

const StudentForm = () => {
  const [data,setData] = useState({name:"",rollNumber:"",class:""})
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleSubmit (e){
    e.preventDefault()
  }
  return (
    <div>
      <h2></h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={data.name} onChange={(e) => setData({...data, name: e.target.value })} required />
        </div>

        <div>
          <label>Roll Number</label>
          <input type="number" value={data.rollNumber} onChange={(e) => setData({...data, rollNumber: e.target.value })}  required />
        </div>

        <div>
          <label>Class</label>
          <input type="text" value={data.class} onChange={(e) => setData({...data, class: e.target.value })} required />
        </div>

        <div>
          <button onClick={() => navigate('/student')}>Cancel</button>
          {/* <button type='Submit'>{{isEdit ? 'Update Student' : 'Add Student'}}</button> */}
        </div>
      </form>
    </div>
  )
}

export default StudentForm