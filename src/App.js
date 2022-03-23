import { useEffect, useState } from "react"

import MainHeader from "./components/MainHeader"
import Container from "./components/Container"
import Form from "./components/Form"
import Section from "./components/Section"
import Buttons from "./components/Buttons"
import Tasks from "./components/Tasks"

const getInitialTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks")
  return tasksFromLocalStorage
    ? JSON.parse(tasksFromLocalStorage)
    : []
}

function App() {
  const [tasks, setTasks] = useState(getInitialTasks)
  const [hideDone, setHideDone] = useState(false)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const markAllDoneHandler = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })))
  }

  const toggleHideDoneHandler = () => {
    setHideDone(hideDone => !hideDone)
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

  return (
    <Container>
      <MainHeader title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form onAddTask={addNewTaskHandler} />} />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            onRemoveTask={removeTaskHandler}
            onToggleDone={toggleDoneHandler}
          />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            onToggleHideDone={toggleHideDoneHandler}
            onMarkAllDone={markAllDoneHandler}
          />
        }
      />
    </Container>
  );
}

export default App;
