import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudents,
  deleteStudent,
  sorting,
  filtering,
} from "../redux/feature/studentSlice";
import { Link } from "react-router";

const StudentList = () => {
  const dispatch = useDispatch();
  const { items, loading, error, sort, filter } = useSelector(
    (state) => state.student
  );

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  let filteredStudents =
    filter === "All"
      ? items
      : items.filter((student) => student.class === filter);

  let sortedStudents = [...filteredStudents];
  if (sort === "name") {
    sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "roll") {
    sortedStudents.sort((a, b) => a.roll.localeCompare(b.roll));
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Students</h2>

      <div className="flex space-x-4 mb-4">
        <select
          value={sort}
          onChange={(e) => dispatch(sorting(e.target.value))}
          className="p-2 border rounded"
        >
          <option value="name">Sort by Name</option>
          <option value="roll">Sort by Roll</option>
        </select>

        <select
          value={filter}
          onChange={(e) => dispatch(filtering(e.target.value))}
          className="p-2 border rounded"
        >
          <option value="All">All Classes</option>
          {[...new Set(items.map((s) => s.class))].map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>
      </div>

      {/* Student List */}
      <ul className="space-y-3">
        {sortedStudents.map((student) => (
          <li
            key={student.id}
            className="flex justify-between bg-gray-100 p-3 rounded-lg"
          >
            <Link to={`/student/${student.id}`} className="font-semibold">
              {student.name} - Roll: {student.roll} - Class: {student.class}
            </Link>
            <button onClick={() => dispatch(deleteStudent(student.id))}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
