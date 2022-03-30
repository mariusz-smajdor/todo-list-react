import { useState } from "react"

import { useTasks } from "../../../useTasks"
import MainHeader from "../../common/MainHeader"
import Container from "../../common/Container"
import Form from "./Form"
import Section from "../../common/Section"
import Buttons from "./Buttons"
import TaskList from "./TaskList"

const Tasks = () => {
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
          <TaskList
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

export default Tasks;
