import { createSlice } from '@reduxjs/toolkit'

export const totalNoteSlice = createSlice({
  name: 'totalNotes',
  initialState: 0,
  reducers: {
    totalNoteIncrement: state => state += 1,
  },
})

export const { totalNoteIncrement } = totalNoteSlice.actions;

export default totalNoteSlice.reducer;
