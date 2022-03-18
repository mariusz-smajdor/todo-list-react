import MainHeader from "./MainHeader";
import Container from "./Container"
import Form from "./Form"
import Section from "./Section"

function App() {
  return (
    <Container>
      <MainHeader title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section title="Lista zadań" />
    </Container>
  );
}

export default App;
