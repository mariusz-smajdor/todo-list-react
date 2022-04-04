import { Fragment } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import MainHeader from "../../../common/MainHeader"
import Container from "../../../common/Container"
import Section from "../../../common/Section"
import { selectTasks } from "../tasksSlice"

const TaskPage = () => {
  const params = useParams()
  const { tasks } = useSelector(selectTasks)
  const task = tasks.find(task => task.id === params.id)

  return (
    <Container>
      <MainHeader title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania 😥"}
        body={task &&
          <Fragment>
            <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
          </Fragment>
        }
      />
    </Container>
  );
}

export default TaskPage;