import MainHeader from "../../../common/MainHeader"
import Container from "../../../common/Container"
import Section from "../../../common/Section"
import Form from "./Form"
import Buttons from "./Buttons"
import TaskList from "./TaskList"
import Search from "./Search"

const TasksPage = () => {
  return (
    <Container>
      <MainHeader title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Wyszukaj zadanie"
        body={<Search />}
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
