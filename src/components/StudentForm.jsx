import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/feature/studentSlice";
import { useNavigate } from "react-router";

const StudentForm = () => {
  const [form, setForm] = useState({ name: "", roll_no: "", class: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent({ ...form }));
    navigate("/");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" placeholder="Name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" placeholder="Roll Number" value={form.roll_no} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" placeholder="Class" value={form.class} onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default StudentForm;
