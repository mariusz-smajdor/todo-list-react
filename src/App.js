import MainHeader from "./components/MainHeader"
import Container from "./components/Container"
import Form from "./components/Form"
import Section from "./components/Section"
import Buttons from "./components/Buttons"
import Tasks from "./components/Tasks"

function App() {
  const DUMMY_TASKS = [
    { content: "Lorem ipsum", done: false, id: "1" },
    { content: "dolor sit amet", done: true, id: "2" }
  ]

  const hideDone = false

  return (
    <Container>
      <MainHeader title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section title="Lista zadań" body={<Tasks tasks={DUMMY_TASKS} hideDone={hideDone} />} extraHeaderContent={<Buttons tasks={DUMMY_TASKS} />} />
    </Container>
  );
}

export default App;
