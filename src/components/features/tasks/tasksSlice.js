import { createSlice } from "@reduxjs/toolkit"

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload)
    },
    toggleDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload)

      tasks[index].done = !tasks[index].done
    },
    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload)

      tasks.splice(index, 1)
    },
    markAllDone: ({ tasks }) => {
      tasks.forEach(task => task.done = true)
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone
    }
  }
})

export const { addTask, toggleHideDone, toggleDone, removeTask, markAllDone } = tasksSlice.actions
export const selectTasks = state => state.tasks
export default tasksSlice.reducer