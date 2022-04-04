import { HashRouter, Switch, Route, Redirect } from "react-router-dom"
import AboutPage from "./components/features/about/AboutPage"
import TaskPage from "./components/features/tasks/TaskPage"
import TasksPage from "./components/features/tasks/TasksPage"
import Navigation from "./components/Navigation"
import { toAbout, toTask, toTasks } from "./routes"

const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toTask()}>
        <TaskPage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toAbout()}>
        <AboutPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
)

export default App