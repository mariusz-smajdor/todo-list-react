import styled from "styled-components"

export const Wrapper = styled.form`
  display: flex;
  gap: ${props => props.theme.space.big}px;

  @media (max-width: ${props => props.theme.breakpoint.mobileMax}px) {
    flex-direction: column;
  }
`

export const Input = styled.input`
  flex-grow: 1;
  border: 1px solid #ddd;
  border-radius: ${props => props.theme.space.normal}px;
  padding: ${props => props.theme.space.normal}px;
`

export const Button = styled.button`
  border: unset;
  border-radius: ${props => props.theme.space.normal}px;
  padding: ${props => props.theme.space.normal}px;
  background: ${props => props.theme.color.mainDetail};
  color: white;
  transition: filter 1s;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }
`
