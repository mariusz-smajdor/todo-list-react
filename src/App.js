import { HashRouter, Switch, Route, Redirect } from "react-router-dom"
import About from "./components/features/about/About"
import Tasks from "./components/features/tasks/TasksPage"
import Navigation from "./components/Navigation"

const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/zadania">
        <Tasks />
      </Route>
      <Route path="/o-projekcie">
        <About />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
)

export default App