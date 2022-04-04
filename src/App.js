import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom"
import About from "./components/features/about/About"
import Tasks from "./components/features/tasks/TasksPage"

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/zadania">
            Zadania
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/o-projekcie">
            O projekcie
          </NavLink>
        </li>
      </ul>
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
    </nav>
  </HashRouter>
)

export default App