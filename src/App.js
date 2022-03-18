import MainHeader from "./MainHeader"
import Container from "./Container"
import Form from "./Form"
import Section from "./Section"
import Buttons from "./Buttons"
import Tasks from "./Tasks"

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
