import { useState } from "react"

import MainHeader from "./components/MainHeader"
import Container from "./components/Container"
import Form from "./components/Form"
import Section from "./components/Section"
import Buttons from "./components/Buttons"
import Tasks from "./components/Tasks"

const DUMMY_TASKS = [
  { content: "Lorem ipsum", done: false, id: "1" },
  { content: "dolor sit amet", done: true, id: "2" }
]

function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS)
  const hideDone = false

  const removeTaskHandler = id => {
    console.log(id)
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
      <Section title="Lista zadań" body={<Tasks tasks={tasks} hideDone={hideDone} onRemoveTask={removeTaskHandler} />} extraHeaderContent={<Buttons tasks={DUMMY_TASKS} />} />
    </Container>
  );
}

export default App;
