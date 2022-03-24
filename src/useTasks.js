import { useState, useEffect } from "react"

const getInitialTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks")
  return tasksFromLocalStorage
    ? JSON.parse(tasksFromLocalStorage)
    : []
}

export const useTasks = () => {
  const [tasks, setTasks] = useState(getInitialTasks)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const markAllDoneHandler = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })))
  }

  const toggleDoneHandler = id => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return {
          ...task, done: !task.done
        }
      }
      return task
    }))
  }
  const removeTaskHandler = id => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

  const addNewTaskHandler = newTaskContent => {
    setTasks(tasks => (
      [
        ...tasks,
        { content: newTaskContent, done: false, id: Math.random() }
      ]
    ))
  }

  return {
    tasks,
    markAllDoneHandler,
    toggleDoneHandler,
    removeTaskHandler,
    addNewTaskHandler
  }
}