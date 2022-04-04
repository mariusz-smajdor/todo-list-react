import MainHeader from "../../../common/MainHeader"
import Container from "../../../common/Container"
import Section from "../../../common/Section"
import Form from "./Form"
import Buttons from "./Buttons"
import TaskList from "./TaskList"

const TasksPage = () => {
  return (
    <Container>
      <MainHeader title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
