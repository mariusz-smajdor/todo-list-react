import { toAbout, toTasks } from "../../routes"
import { List, StyledNavLink } from "./styled"

const Navigation = () => {
  return (
    <nav>
      <List>
        <li>
          <StyledNavLink activeClassName="active" to={toTasks()}>
            Zadania
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink activeClassName="active" to={toAbout()}>
            O projekcie
          </StyledNavLink>
        </li>
      </List>
    </nav>
  )
}

export default Navigation