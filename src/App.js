import MainHeader from "./MainHeader"
import Container from "./Container"
import Form from "./Form"
import Section from "./Section"
import Buttons from "./Buttons"

function App() {
  const DUMMY_TASKS = [
    { content: "Lorem ipsum", done: false },
    { content: "dolor sit amet", done: true }
  ]

  return (
    <Container>
      <MainHeader title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section title="Lista zadań" extraHeaderContent={<Buttons tasks={DUMMY_TASKS} />} />
    </Container>
  );
}

export default App;
