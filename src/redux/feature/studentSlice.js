import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const STUDENT_URL = 'http://localhost:3000/Student';

export const fetchStudents = createAsyncThunk(
  'students/fetchStudents',
  async () => {
    const response = await axios.get(STUDENT_URL);
    return response.data;
  }
);

export const addStudent = createAsyncThunk(
  'students/addStudent',
  async (Student) => {
    const response = await axios.post(STUDENT_URL, Student);
    return response.data;
  }
);

export const updateStudent = createAsyncThunk(
  'students/updateStudent',
  async (student) => {
    const response = await axios.put(`${STUDENT_URL}/${student.id}`, student);
    return response.data;
  }
  );

export const deleteStudent = createAsyncThunk(
  'students/deleteStudent',
  async (id) => {
    await axios.delete(`${STUDENT_URL}/${id}`);
    return id;
  }
);

const initialState = {
  loading: false,
  error: null,
  sort: "name",
  filter: "All"
}

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    sorting: (state, action) => {
      state.sort = action.payload;
    },
    filtering: (state, action) => {
      state.filter = action.payload;
    },
  },
    extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
       // Add student
      .addCase(addStudent.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // Update student
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (student) => student.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
       // Delete student
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (student) => student.id !== action.payload
        );
      });
  },
});

export const { sorting, filtering } = studentSlice.actions

export default studentSlice.reducer