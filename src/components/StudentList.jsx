import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, deleteStudent, sorting, filtering, updateStudent } from "../redux/feature/studentSlice";

const StudentList = () => {
  const dispatch = useDispatch();
  const { items, loading, error, sort, filter } = useSelector((state) => state.student);

  const [editId, setEditId] = useState(null)
  const [editForm, setEditForm] = useState({name:"",roll_no:"",class:""})
  //  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  let filteredStudents =
    filter === "All" ? items : items.filter((student) => student.class === filter);


  //     let sortedStudents = [...filteredStudents].sort((a, b) =>
  //   sortOrder === "asc"
  //     ? a.name.localeCompare(b.name)
  //     : b.name.localeCompare(a.name)
  // );

   let sortedStudents = [...filteredStudents].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleChange = (e) =>
    setEditForm({ ...editForm, [e.target.name]: e.target.value });

  const handleEdit = (student) => {
    setEditId(student.id);
    setEditForm(student);
  };

  const handleUpdate = () => {
    dispatch(updateStudent(editForm));
    setEditId(null); 
    alert("Updated Suceessfully")
  };

  return (

     <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Students</h2>
      

      <div className="flex space-x-4 mb-4">
        <select value={filter} onChange={(e) => dispatch(filtering(e.target.value))}
          className="p-2 border rounded" >

          <option value="All">All Classes</option>
          {[...new Set(items.map((s) => s.class))].map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      </div>

      <ul className="space-y-3">
        {sortedStudents.map((student) => (
          <li 
            key={student.id}  
            className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"> 

            {editId === student.id ? (
              <div className="flex-1 flex space-x-2">
                <input type="text" value={editForm.name} onChange={handleChange}
                  className="border p-1 rounded w-1/3" />
                <input type="text" value={editForm.roll_no} onChange={handleChange}
                  className="border p-1 rounded w-1/3"/>
                <input type="text" value={editForm.class} onChange={handleChange}
                  className="border p-1 rounded w-1/3" />
              </div>
            ) : (
              <span className="flex-1">
               Name: {student.name} , Roll Num: {student.roll_no} , Class: {student.class}
              </span>
            )}

            <div className="space-x-2">
              {editId === student.id ? (
                <button onClick={handleUpdate} className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer">
                  Update
                </button>
              ) : (
                <button onClick={() => handleEdit(student)} className="bg-yellow-500 text-white px-3 py-1 rounded cursor-pointer">
                  Edit
                </button>
              )}
              <button onClick={() => dispatch(deleteStudent(student.id))} className="bg-red-600 text-white px-3 py-1 rounded cursor-pointer">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;  