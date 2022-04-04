import { HashRouter, Switch, Route, Redirect } from "react-router-dom"
import AboutPage from "./components/features/about/AboutPage"
import TaskPage from "./components/features/tasks/TaskPage"
import TasksPage from "./components/features/tasks/TasksPage"
import Navigation from "./components/Navigation"

const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/o-projekcie">
        <AboutPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
)

export default App