import { configureStore } from '@reduxjs/toolkit';
import notes from './notesSLice';
import totalNotes from './totalNoteSlice';

export default configureStore({
  reducer: {
    totalNotes: totalNotes,
    notes: notes,
  },
})
