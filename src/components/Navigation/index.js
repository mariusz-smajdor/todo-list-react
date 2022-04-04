import { List, StyledNavLink } from "./styled"

const Navigation = () => {
  return (
    <nav>
      <List>
        <li>
          <StyledNavLink activeClassName="active" to="/zadania">
            Zadania
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink activeClassName="active" to="/o-projekcie">
            O projekcie
          </StyledNavLink>
        </li>
      </List>
    </nav>
  )
}

export default Navigation