import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: ${props => props.theme.space.normal}px;
  align-items: center;
  padding: ${props => props.theme.space.normal}px;
  border-bottom: 2px solid ${props => props.theme.color.mainBackground};
  word-break: break-word;

  ${props => props.styledHidden && css`
    display:none;
  `}
`

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border: unset;
  border-radius: 10px;
  padding: 0;
  color: white;
  transition: filter 1s;

  ${props => props.styledToggle && css`
    background: forestgreen;
  `}

  ${props => props.styledRemove && css`
    background: crimson;
  `}

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }
`

export const TaskText = styled.span`
  ${props => props.styledDone && css`
    text-decoration: line-through;
  `}
`

export const StyledLink = styled(Link)`
  color: unset;
  text-decoration: none;
`