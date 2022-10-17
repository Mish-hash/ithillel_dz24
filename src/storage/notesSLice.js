import { createSlice } from '@reduxjs/toolkit'

export const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      const element = {
        id:Date.now(),
        text: action.payload.text
      }

      state.push(element);
    },
  },
})


export const { addNote } = noteSlice.actions

export default noteSlice.reducer
