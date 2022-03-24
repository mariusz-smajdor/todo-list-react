import { useState } from "react"

import { useTasks } from "./useTasks"
import MainHeader from "./components/MainHeader"
import Container from "./components/Container"
import Form from "./components/Form"
import Section from "./components/Section"
import Buttons from "./components/Buttons"
import Tasks from "./components/Tasks"

function App() {
  const [hideDone, setHideDone] = useState(false)

  const {
    tasks,
    markAllDoneHandler,
    toggleDoneHandler,
    removeTaskHandler,
    addNewTaskHandler
  } = useTasks()

  const toggleHideDoneHandler = () => {
    setHideDone(hideDone => !hideDone)
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
