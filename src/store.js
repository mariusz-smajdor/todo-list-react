import { configureStore } from "@reduxjs/toolkit"

import tasksReducer from "./components/features/tasks/tasksSlice"

export default configureStore({
  reducer: {
    tasks: tasksReducer
  }
})