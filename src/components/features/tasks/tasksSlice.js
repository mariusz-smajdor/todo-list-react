import { createSlice } from "@reduxjs/toolkit"

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task)
    },
    toggleDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId)

      tasks[index].done = !tasks[index].done
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId)

      tasks.splice(index, 1)
    },
    markAllDone: ({ tasks }) => {
      tasks.forEach(task => task.done = true)
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone
    },
    fetchExampleTasks: () => { },
    setExampleTasks: (state, { payload: tasks }) => {
      state.tasks = tasks
    }
  }
})

export const { addTask, toggleHideDone, toggleDone, removeTask, markAllDone, fetchExampleTasks, setExampleTasks } = tasksSlice.actions
export const selectTasks = state => state.tasks
export default tasksSlice.reducer