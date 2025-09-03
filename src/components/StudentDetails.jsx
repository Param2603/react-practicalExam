import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent, fetchStudents } from "../redux/feature/studentSlice";
import { useParams, useNavigate } from "react-router";

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.items.find((s) => s.id === parseInt(id)));

  const [form, setForm] = useState(student || { name: "", roll: "", class: "" });

  useEffect(() => {
    if (!student) dispatch(fetchStudents());
  }, [student, dispatch]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudent(form));
    navigate("/");
  };

  if (!form) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Student</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="roll" value={form.roll} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="class" value={form.class} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default StudentDetails;
