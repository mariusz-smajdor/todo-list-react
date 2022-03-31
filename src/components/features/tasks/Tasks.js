import MainHeader from "../../common/MainHeader"
import Container from "../../common/Container"
import Form from "./Form"
import Section from "../../common/Section"
import Buttons from "./Buttons"
import TaskList from "./TaskList"

const Tasks = () => {
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

export default Tasks;
