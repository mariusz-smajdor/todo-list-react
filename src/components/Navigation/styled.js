import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const List = styled.ul`
  padding: ${props => props.theme.space.big}px;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: center;
  background: white;
  box-shadow: 0 4px 8px ${props => props.theme.color.secondaryDetail};
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: unset;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${props => props.theme.color.mainDetail};
  transition: filter 1s;

  &.active {
    filter: brightness(120%)
  }

  &:hover {
    filter: brightness(110%)
  }

  &:active {
    filter: brightness(120%)
  }
`